import * as exec from '@actions/exec'
import * as core from '@actions/core'
import {installBinary} from 'action-utils'

async function main(): Promise<void> {
  try {
    await installBinary()

    await exec.exec('zeet', [
      core.getInput('project'),
      core.getInput('image') && `--image=${core.getInput('image')}`,
      core.getInput('branch') && `--branch=${core.getInput('branch')}`,
      core.getInput('follow') && `--follow=${core.getInput('wait')}`
    ])
  } catch (e: unknown) {
    if (e instanceof Error) core.error(e)
  }
}

main()
