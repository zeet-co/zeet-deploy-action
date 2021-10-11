import * as core from '@actions/core'
import {GraphQLClient} from 'graphql-request'
import {DeployResultFragment, getSdk} from './generated/graphql'

async function run(): Promise<void> {
  try {
    const endpoint =
      core.getInput('api_url') || 'https://anchor.zeet.co/graphql'

    const token = core.getInput('deploy_key')
    const projectId = core.getInput('project_id')
    const image = core.getInput('image')
    const branch = core.getInput('branch')

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })

    const sdk = getSdk(graphQLClient)

    let deployResult = {} as DeployResultFragment

    if (image) {
      const result = await sdk.UpdateProject({
        input: {
          id: projectId,
          dockerImage: image
        }
      })
      core.info(`${image} Deployed!`)

      deployResult = result?.updateProject
    } else if (branch) {
      const result = await sdk.DeployBranch({
        id: projectId,
        branch
      })
      core.info(`${branch} Deployed!`)

      deployResult = result?.buildRepo
    } else {
      core.error('invalid input, image or branch required')
    }

    const link = `https://zeet.co/repo/${deployResult?.id}/deployments/${deployResult?.productionDeployment?.id}`

    core.info(`Zeet Dashboard: ${link}`)
    core.setOutput('link', link)

    core.debug(new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
