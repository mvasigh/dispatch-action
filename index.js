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
    const payload = github.context.payload;
    const { repo, owner } = getDispatchDest({
      context: payload,
      repo: core.getInput('repo'),
      owner: core.getInput('owner')
    });

    const event_type = core.getInput('event_type');
    const message = JSON.parse(core.getInput('message') || '{}');
    const token = core.getInput('token');
    const client_payload = { event: payload, message }; // GH doesn't allow more than 10 keys on this object

    const octokit = new github.GitHub(token);

    await octokit.repos.createDispatchEvent({
      owner,
      repo,
      event_type,
      client_payload
    });

    console.log(`${event_type} event dispatched successfully!`);
  } catch (e) {
    core.setFailed(e.message);
  }
})();
