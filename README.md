# Basic TypeScript Tooling set with mocha/nyc

Several years ago, it's difficult to use TypeScript in an enterprise production stack. Because there were tons of problems to solve, like hacky Triple-Slash Directives, immature test/coverage-repoting system etc... I still think the current way of managing type definition files is not so sophisticated. But as of v2.x, we're good to go with TypeScript, it's getting better and better.

## Goals

* Use TypeScript everywhere except final transpilation for production
* Write tests with TypeScript
* Get coverage report with TypeScript

## IDE / Editor

Visual Studio Code (vscode) might be a good option for development environment with TypeScript. But personally I prefer using IntelliJ IDEA, it has a very powerful debugger, refactoring tool, polyglot programming support etc...