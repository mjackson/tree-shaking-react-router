const path = require('path');
const rollup = require('rollup').rollup;
const alias = require('rollup-plugin-alias');
const babel = require('rollup-plugin-babel');

const babelConfig = {
  babelrcRoots: [path.resolve(__dirname, 'packages/*')],
  runtimeHelpers: true,
  plugins: [['@babel/transform-runtime', { useESModules: true }]]
};

const external = id => !id.startsWith('.') && !id.startsWith('/');

module.exports = [
  {
    input: path.resolve(__dirname, 'packages/history/modules/index.js'),
    output: {
      file: path.resolve(__dirname, 'packages/history/history.js'),
      format: 'esm'
    },
    external: external
  },

  {
    input: path.resolve(__dirname, 'packages/react-router/modules/index.js'),
    output: {
      file: path.resolve(__dirname, 'packages/react-router/react-router.js'),
      format: 'esm'
    },
    external: external,
    plugins: [
      alias({
        history: path.resolve(__dirname, 'packages/history/history.js')
      }),
      babel(babelConfig)
    ]
  }
];
