import * as exec from '@actions/exec'
import * as core from '@actions/core'
import {installBinary} from 'action-utils'

async function main(): Promise<void> {
  try {
    await installBinary()

    await exec.exec('zeet deploy', [
      core.getInput('project'),
      core.getInput('image') && `--image=${core.getInput('image')}`,
      core.getInput('branch') && `--branch=${core.getInput('branch')}`,
      core.getInput('follow') && `--follow=${core.getInput('wait')}`
    ])
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    core.error(e)
  }
}

main()
