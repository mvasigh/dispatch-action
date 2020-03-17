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

// https://stackoverflow.com/questions/4253367/how-to-escape-a-json-string-containing-newline-characters-using-javascript
function escapeJSON(str) {
  return str
    .trim()
    .replace(/\\n/g, '\\n')
    .replace(/\\"/g, '\\"')
    .replace(/\\r/g, '\\r')
    .replace(/\\t/g, '\\t')
    .replace(/\\b/g, '\\b')
    .replace(/\\f/g, '\\f');
}

(async function main() {
  try {
    const IS_DEBUG = Number(core.getInput('debug'));

    const payload = github.context.payload;
    const { repo, owner } = getDispatchDest({
      context: payload,
      repo: core.getInput('repo'),
      owner: core.getInput('owner')
    });

    if (IS_DEBUG) {
      console.log('Dispatching message to this destination:');
      console.log({ repo, owner });
    }

    const event_type = core.getInput('event_type');
    const messageJSON = escapeJSON(core.getInput('message') || '{}');

    if (IS_DEBUG) {
      console.log('Custom payload to be dispatched:');
      console.log(messageJSON);
    }

    const message = JSON.parse(messageJSON);
    const token = core.getInput('token');
    const client_payload = { event: payload, message }; // GH doesn't allow more than 10 keys on this object

    if (IS_DEBUG) {
      console.log('Preparing to dispatch message with this payload:');
      console.log(client_payload);
    }

    const octokit = new github.GitHub(token);

    const res = await octokit.repos.createDispatchEvent({
      owner,
      repo,
      event_type,
      client_payload
    });

    console.log(`${event_type} event dispatched successfully!`);

    if (IS_DEBUG) {
      console.log(res);
    }
  } catch (e) {
    core.setFailed(e.message);
  }
})();
