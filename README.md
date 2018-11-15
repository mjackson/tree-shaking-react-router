This repo is an experiment to try and figure out how to best structure the React Router codebase in version 4.4 (and history version 4.8) so that we can get the benefits of [tree shaking](https://webpack.js.org/guides/tree-shaking/) when users bundle their apps with webpack.

### Goal

The main problem we are running into currently is that when people `import` a piece of the router, they actually get more pieces than they need. For example, if someone imports `BrowserRouter` in their React Router app, they shouldn't also get `HashRouter`. Similarly, `HashRouter` imports `createHashHistory`, which is also not needed in the output bundle.

In the past we solved this by asking people to import only the pieces they need (i.e. `import Router from 'react-router/BrowserRouter'`) but the promise of ES modules is that we should be able to statically analyze the code, figure out what pieces of these modules are not being used, and automatically remove them from the parse tree so they do not appear in the output.

The goal of this experiment is to `import { BrowserRouter } from 'react-router'` and have no trace of `HashRouter` or `createHashHistory` in the output bundle. Ideally we would also have the smallest possible bundle size.

### Setup

Each test case is self-contained in its own directory. The `app.js` file imports `BrowserRouter` from the dependencies which are kept in the `packages` directory.

Each test has a `build.js` script that can be used to build the whole test case and a `test.js` script that can be used to test the output for traces of undesired artifacts.

Also, every dependency uses `{ "sideEffects": false }` in its `package.json` to instruct webpack to assume that no modules in the library have side effects. This means that webpack will insert a `#__PURE__` instruction with the iifes that it creates so that minifiers (like uglify) can assume they are pure.

### Results

#### `1-rollup-bundle`

In this test case I used [Rollup](https://rollupjs.org/) to bundle all ES modules in the dependencies into a single module (`history.js` and `react-router.js`).

We run webpack in development mode and used `{ optimization: { usedExports: true } }` in our config so we could see comments in the output bundle about which exports were being used and which ones weren't. Toward the end of [the output bundle](https://github.com/mjackson/tree-shaking/blob/master/1-rollup-bundle/build/main.js) we see:

```js
/*!***********************************************!*\
  !*** ./packages/react-router/react-router.js ***!
  \***********************************************/
/*! exports provided: HashRouter, BrowserRouter, Route */
/*! exports used: BrowserRouter, Route */
```

webpack knows `react-router`'s `HashRouter` export is not being used, but it does not remove it from the output bundle.

We would prefer to distribute a single file for each build, mainly because it's cleaner that way. Also, our builds are faster, and there is less code duplication in the individual modules for things like Babel helpers.

However, although webpack knows `HashRouter` isn't being used, it still leaves it in the app's output bundle when we use this strategy. Let's try again.

#### `2-rollup-bundle-production`

In this test case I continued to use Rollup as before, but switched webpack into production mode, to see if this would be able to eliminate all traces of `HashRouter` from the app's output bundle since it is technically "dead code". Unfortunately, [the output bundle](https://github.com/mjackson/tree-shaking/blob/master/2-rollup-bundle-production/build/main.js) still contains traces of hash history. :/

Onward!

#### `3-separate-files`

This test case compiles dependencies using Babel directly into several files, so each package has an `esm` directory with the build. webpack is run in development mode so we can inspect the output more easily.

The tests still fail in this case (webpack hasn't done any tree shaking), but we some familiar lines in [the output bundle](https://github.com/mjackson/tree-shaking/blob/master/3-separate-files/build/main.js):

```js
/*!********************************************!*\
  !*** ./packages/react-router/esm/index.js ***!
  \********************************************/
/*! exports provided: HashRouter, BrowserRouter, Route */
/*! exports used: BrowserRouter, Route */
```

webpack still knows that `HashRouter` is unused, but it still leaves it in the output bundle. One more try?

#### `4-separate-files-production`

This test case is the same as the previous one, except this time webpack runs in production mode. In this mode, webpack uses [uglify](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) to minify the source code.

And this time ... it works! There are no traces of `createHashHistory` or `HashRouter` in the app's output bundle.

However, a quick inspection of the app's output bundle reveals that Babel's `inheritsLoose` helper appears twice. In fact, it will appear as many times as we have a `class` that can't be stripped from the output bundle. :/ This was the main advantage from using Rollup in our earlier trials.

### Conclusion

Still need to try other options.

It looks like webpack doesn't actually do any "tree-shaking", but instead inserts annotations in the output bundle that allow uglify to assume the iife's that create classes are pure and therefore remove them from the codebase if that `export` is not used anywhere.

This may be an oversimplification, and there may in fact be something else going on in webpack's production mode that I don't know about.
