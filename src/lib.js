const { minifyJSON } = require('./util');

exports.getDispatchDest = function({ context, repo: _repo, owner: _owner }) {
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
};

exports.createMessagePayload = function(rawMessage, baseObject = {}) {
  const minifiedMessage = minifyJSON(rawMessage);
  if (minifiedMessage) {
    const jsonMessage = JSON.parse(minifiedMessage);
    Object.assign(baseObject, { message: jsonMessage });
  }
  return baseObject;
};
