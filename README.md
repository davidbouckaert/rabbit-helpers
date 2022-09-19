## What is rabbit-helpers?

...

## Installing

[![npm version](https://badge.fury.io/js/@dbouckaert%2Fzh.svg)](https://badge.fury.io/js/@dbouckaert%2Fzh)

Install rabbit-helpers for Mac, Linux, or Windows

```bash
npm install @dbouckaert/rabbit-helpers --save-dev
```

## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

## Getting started

Include the module into your test suite.
`const {..,..} = require('@dbouckaert/rabbit-helpers')`

### Initiation

...

```js
before(async function () {
  // FIRST: setting variables for zephyrHelpers (without the project ID)
  await init({
    username: credentials.username,
    password: credentials.password,
  });
});
```
...