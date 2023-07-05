const core = require('@actions/core');
const github = require('@actions/github');
const { getDispatchDest, createMessagePayload } = require('./lib');

(async function main() {
  try {
    const IS_DEBUG = Number(core.getInput('debug'));

    const inputs = {
      token: core.getInput('token'),
      repo: core.getInput('repo'),
      owner: core.getInput('owner'),
      event_type: core.getInput('event_type'),
      message: core.getInput('message'),
      forwardEventPayload: core.getInput('forwardEventPayload') !== "false",
    };

    const { repo, owner } = getDispatchDest({
      context: github.context.payload,
      repo: inputs.repo,
      owner: inputs.owner
    });

    if (IS_DEBUG) {
      console.log('Dispatching message to this destination:');
      console.log({ repo, owner });
      console.log(`Event input:
        event_type: ${inputs.event_type}
        message: ${inputs.message}
      `);
    }

    const client_payload = createMessagePayload(inputs.message, {
      event: inputs.forwardEventPayload ? github.context.payload : {},
    }); // GH doesn't allow more than 10 keys on payload object

    if (IS_DEBUG) {
      console.log('Preparing to dispatch message with this payload:');
      console.log(JSON.stringify(client_payload, null, 2));
    }

    const octokit = github.getOctokit(inputs.token);
    const res = await octokit.rest.repos.createDispatchEvent({
      owner,
      repo,
      event_type: inputs.event_type,
      client_payload
    });

    console.log(`${inputs.event_type} event dispatched successfully!`);

    if (IS_DEBUG) {
      console.log(res);
    }
  } catch (e) {
    console.error(e);
    core.setFailed(e.message);
  }
})();
