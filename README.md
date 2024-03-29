# Basic TypeScript Tooling set with mocha/nyc

Several years ago, it's difficult to use TypeScript in an enterprise production stack. Because there were tons of problems to solve, like hacky Triple-Slash Directives, immature test/coverage-repoting system etc... I still think the current way of managing type definition files is not so sophisticated. But as of v2.x, we're good to go with TypeScript, it's getting better and better.

## Goals

* Use TypeScript everywhere except final transpilation for production
* Write tests with TypeScript
* Get coverage report with TypeScript


## IDE / Editor

Visual Studio Code (vscode) might be a good option for dev-environment with TypeScript. But personally I prefer using IntelliJ IDEA because it has a very powerful debugger, refactoring tool, polyglot programming support etc...

## TestRunner / Assertion

### mocha
For tiny npm modules. pretty concise.

### Jest
If you're creating mid/big-sized application, it has nice features like parallel testing, built-in coverage/mocking tool.


## Linter / Formatter

### TSLint

You can use Airbnb or Microsoft setting as reference, or start with the `recommended` style. 

* [recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)
* [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib)
* [tslint-config-airbnb](https://github.com/progre/tslint-config-airbnb)
* [tslint-consistent-codestyle](https://github.com/ajafff/tslint-consistent-codestyle)

### Prettier

There is an IntelliJ plugin for prettier and here is an [instruction](https://prettier.io/docs/en/webstorm.html).
pre-commit hook instruction is [here](https://prettier.io/docs/en/precommit.html).

## Coverage Tool

If you use mocha, `nyt` is the best option so far. Jest has a built-in coverage tool.