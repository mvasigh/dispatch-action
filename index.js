const core = require('@actions/core');
const github = require('@actions/github');

function getDispatchDest({ context, repo: _repo, owner: _owner }) {
  let repo, owner;

  if (_repo === '@') {
    repo = context.repository.name;
    owner = context.repository.owner.login;
  } else if (_repo.includes('/')) {
    [repo, owner] = _repo.split('/');
  } else {
    repo = _repo;
    owner = _owner || context.repository.owner.login;
  }

  return {
    repo,
    owner
  };
}

(async function main() {
  try {
    const context = github.context;
    const { repo, owner } = getDispatchDest({
      context: context.payload,
      repo: core.getInput('repo'),
      owner: core.getInput('owner')
    });

    console.log(context);

    const event_type = core.getInput('event_type');
    const client_payload = core.getInput('payload');
    console.log(client_payload);

    const token = core.getInput('token');
    const octokit = new github.GitHub(token);

    console.log('Dispatching the action with these parameters:');
    console.log({ owner, repo, event_type, client_payload });

    await octokit.repos.createDispatchEvent({
      owner,
      repo,
      event_type,
      client_payload: JSON.parse(client_payload) || {}
    });

    console.log('Dispatch event emitted successfully!');
  } catch (e) {
    core.setFailed(e.message);
  }
})();
