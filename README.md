This repo is an experiment to try and figure out how to best structure the React Router codebase in version 4.4 (and history version 4.8) so that we can get the benefits of [tree shaking](https://webpack.js.org/guides/tree-shaking/) when users bundle their apps with webpack.

### Goal

The main problem we are running into currently is that when people `import` a piece of the router, they actually get more pieces than they need. For example, if someone imports `BrowserRouter` in their React Router app, they shouldn't also get `HashRouter`. Similarly, `HashRouter` imports `createHashHistory`, which is also not needed in the output bundle.

In the past we solved this by asking people to import only the pieces they need (i.e. `import Router from 'react-router/BrowserRouter'`) but the promise of ES modules is that we should be able to statically analyze the code, figure out what pieces of these modules are not being used, and automatically remove them from the parse tree so they do not appear in the output.

The goal of this experiment is to `import { BrowserRouter } from 'react-router'` and have no trace of `HashRouter` or `createHashHistory` in the output bundle. Ideally we would also have the smallest possible bundle size.

### Setup

Each test case is self-contained in its own directory. The `app.js` file imports `BrowserRouter` from the dependencies which are kept in the `packages` directory.

Each test has a `build.js` script that can be used to build the whole test case and a `test.js` script that can be used to test the output for traces of undesired artifacts.
