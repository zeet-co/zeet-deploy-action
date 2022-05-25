import * as exec from '@actions/exec'
import * as core from '@actions/core'
import {installBinary} from 'action-utils'
import {configureCLI} from 'action-utils/dist/cli'

async function main(): Promise<void> {
  try {
    await installBinary()
    await configureCLI(core.getInput('deploy_key'), core.getInput('api_url'))

    const args = [
      core.getInput('image') && `--image=${core.getInput('image')}`,
      core.getInput('branch') && `--branch=${core.getInput('branch')}`,
      core.getInput('follow') && `--follow=${core.getInput('wait')}`
    ]

    await exec.exec('zeet deploy', [
      core.getInput('project'),
      ...args.filter(a => a)
    ])
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    core.setFailed(e)
  }
}

main()
