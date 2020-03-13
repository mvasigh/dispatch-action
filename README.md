# `dispatch-action`

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: mehdi_vasigh](https://img.shields.io/twitter/follow/mehdi_vasigh.svg?style=social)](https://twitter.com/mehdi_vasigh)

> Create repository dispatch events to trigger a Github workflow from within another workflow

## 🚀 Usage

To use this action, you need to create a Github workflow file in your repository under the `.github/workflows` directory. You also must create a Github [personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line), which should be stored as a secret in your Github repository.

Here is an example of a Github workflow file that uses this action to trigger a `sample-push` event in another repository:

```yaml
name: Alert parent repository on push
on: push

jobs:
  build:
    name: Dispatch to `other-repo`
    runs-on: ubuntu-latest
    steps:
      - name: Emit repository_dispatch
        uses: mvasigh/dispatch-action@master
        with:
          # You should create a personal access token and store it in your repository
          token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
          repo: other-repo
          owner: mvasigh
          event_type: sample_push
```

The emitted event can be consumed in another Github workflow, either within the same repository or another one. Here's an example:

```yaml
name: Print on external push

# Controls when the action will run. Triggers the workflow on repository_dispatch and filters by type of event (i.e. `event_type`)
on:
  repository_dispatch:
    types: [sample_push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run a one-line script
        run: echo Hello, world!
      - name: Run a multi-line script
        run: |
          echo Add other custom actions to build,
          echo test, and deploy your project.
```

## 📝 Options

This action accepts the following options:

`token` **(required)** - a Github [personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

`event_type` **(required)** - a name for the type of event that you are emitting

`repo` - name of the repository to dispatch event to (same repository by default)

`owner` - Github org/name of the repository's owner (event sender's name by default)

`client_payload` - an optional payload to send along with the event (must be a JSON string)

## Author

👤 **Mehdi Vasigh <mehdi.vasigh@gmail.com>**

- Website: https://mvasigh.dev/
- Twitter: [@mehdi_vasigh](https://twitter.com/mehdi_vasigh)
- Github: [@mvasigh](https://github.com/mvasigh)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
