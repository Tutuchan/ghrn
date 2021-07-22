# ghrn

Get desktop notifications for Github pull request reviews.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ghrn.svg)](https://npmjs.org/package/ghrn)
[![License](https://img.shields.io/npm/l/ghrn.svg)](https://github.com/Tutuchan/ghrn/blob/master/package.json)

<!-- toc -->
- [ghrn](#ghrn)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
<!-- tocstop -->
# Installation
<!-- installation -->
```bash
npm install -g ghrn
```

# Setup

![](docs/readme.png)

1. Navigate to your Github settings,
2. Create a Github personal token with the `notifications` scope
3. Enable SSO if needed to access organizations' repos
4. Navigate to your [notifications page](https://github.com/notifications?query=reason%3Areview-requested) and mark all current requests as read not to be spammed at the first execution

For Mac users:

1. The first time `ghrn` runs, you will be asked to allow Desktop notifications
2. Go to *System preferences > Notifications* and look for **terminal-notifier**
3. Choose the `Alerts` alert style, otherwise the notifications disappear after 5 seconds and they can't be clicked to reach the PR URL
<!-- installationstop -->
# Usage
<!-- usage -->
```bash
ghrn --help
Get notified for review requests

USAGE
  $ ghrn

OPTIONS
  -f, --frequency=frequency  [default: 60] how often (in seconds) should notifications be checked
  -h, --help                 show CLI help
  -v, --version              show CLI version
```

Running the command without any flags will poll Github every 60 seconds for new review requests.

```bash
ghrn
```
<!-- usagestop -->
