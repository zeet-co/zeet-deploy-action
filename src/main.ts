import * as core from '@actions/core'

import {GraphQLClient} from 'graphql-request'
import {getSdk} from './generated/graphql'

async function run(): Promise<void> {
  try {
    const endpoint =
      core.getInput('api_url') || 'https://anchor.zeet.co/graphql'

    const token = core.getInput('deploy_key')
    const projectId = core.getInput('project_id')
    const image = core.getInput('image')

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })

    const sdk = getSdk(graphQLClient)

    const result = await sdk.UpdateProject({
      input: {
        id: projectId,
        dockerImage: image
      }
    })

    core.debug(new Date().toTimeString())
    core.setOutput(
      'link',
      `https://zeet.co/repo/${result.updateProject?.id}/deployments/${result?.updateProject?.productionDeployment?.id}`
    )
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
