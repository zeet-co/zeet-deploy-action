import * as core from '@actions/core'
import {GraphQLClient} from 'graphql-request'
import {
  DeploymentStatus,
  DeployResultFragment,
  getSdk
} from './generated/graphql'

const sleep = async (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms))

async function run(): Promise<void> {
  try {
    const endpoint =
      core.getInput('api_url') || 'https://anchor.zeet.co/graphql'

    const token = core.getInput('deploy_key')
    const projectPath = core.getInput('project')
    let projectId = core.getInput('project_id')
    const image = core.getInput('image')
    const branch = core.getInput('branch')
    const wait = core.getBooleanInput('wait')

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })

    const sdk = getSdk(graphQLClient)

    if (!projectId) {
      if (!projectPath) {
        core.error('invalid input, project name or id is required')
      }

      const p = await sdk.GetProject({
        path: projectPath
      })
      projectId = p.project?.id
    }

    let deployResult: DeployResultFragment | undefined | null = null

    if (image) {
      if (branch) {
        const result = await sdk.UpdateBranch({
          input: {
            repoID: projectId,
            name: branch,
            image,
            deploy: true
          }
        })
        deployResult = result?.updateBranch?.latestDeployment
        core.info(`${image} Deploying on ${branch}!`)
      } else {
        const result = await sdk.UpdateProject({
          input: {
            id: projectId,
            dockerImage: image
          }
        })
        deployResult = result?.updateProject?.productionDeployment
        core.info(`${image} Deploying!`)
      }
    } else if (branch) {
      const result = await sdk.DeployBranch({
        id: projectId,
        branch
      })
      core.info(`${branch} Deployed!`)

      deployResult = result?.buildRepo?.productionDeployment
    } else {
      core.error('invalid input, image or branch required')
    }

    if (!deployResult?.id) {
      core.error('deploy failed')
      return // not needed, added for type checker
    }

    const link = `https://zeet.co/repo/${projectId}/deployments/${deployResult.id}`

    core.info(`Zeet Dashboard: ${link}`)
    core.setOutput('link', link)

    if (wait) {
      let done = false
      while (!done) {
        const result = await sdk.GetDeployment({
          id: deployResult.id
        })

        if (
          result.currentUser?.deployment?.status ===
          DeploymentStatus.BuildInProgress
        ) {
          core.info('project building...')
        } else if (
          result.currentUser?.deployment?.status ===
          DeploymentStatus.DeployInProgress
        ) {
          core.info('project deploying...')
        } else if (
          result.currentUser?.deployment?.status ===
            DeploymentStatus.DeploySucceeded ||
          result.currentUser?.deployment?.status ===
            DeploymentStatus.DeployStopped
        ) {
          core.info('project deploy succeeded')
          done = true
        } else if (
          result.currentUser?.deployment?.status ===
            DeploymentStatus.BuildFailed ||
          result.currentUser?.deployment?.status ===
            DeploymentStatus.DeployFailed
        ) {
          core.info('project deploy failed, check Zeet dashboard for more info')
          core.setFailed(
            'project deploy failed, check Zeet dashboard for more info'
          )
          done = true
        }

        await sleep(2000)
      }
    }

    core.debug(new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
