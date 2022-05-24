import * as exec from '@actions/exec'
import * as core from '@actions/core'

async function main(): Promise<void> {
  await exec.exec('zeet', [
    core.getInput('project'),
    core.getInput('image') && `--image=${core.getInput('image')}`,
    core.getInput('branch') && `--branch=${core.getInput('branch')}`,
    core.getInput('follow') && `--follow=${core.getInput('wait')}`
  ])
}

main()
