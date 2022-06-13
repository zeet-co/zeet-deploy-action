import * as exec from '@actions/exec'
import * as core from '@actions/core'

async function main(): Promise<void> {
  try {
    const args = [
      core.getInput('image') && `--image=${core.getInput('image')}`,
      core.getInput('branch') && `--branch=${core.getInput('branch')}`,
      `--follow=${core.getBooleanInput('wait')}`
    ]

    const deploy = await exec.getExecOutput(
      'zeet',
      [
        'deploy',
        core.getInput('project') || core.getInput('project_id'),
        ...args.filter(a => a)
      ],
      {failOnStdErr: true}
    )

    const links = deploy.stdout.match(/https?:\/\/zeet\.co\/repo[^\s]+/)
    core.setOutput('link', links ? links[0] : 'Not Found')
  } catch (e: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    core.setFailed(e)
  }
}

main()
