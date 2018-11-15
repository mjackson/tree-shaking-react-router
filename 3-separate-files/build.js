const path = require('path');
const execSync = require('child_process').execSync;

function exec(command, extraEnv) {
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv)
  });
}

const bin = name => path.resolve(__dirname, '../node_modules/.bin', name);

const cwd = process.cwd();

// Build the history package
process.chdir(path.resolve(__dirname, 'packages/history'));
exec(bin('babel') + ' modules -d esm');

// Build the react-router package
process.chdir(path.resolve(__dirname, 'packages/react-router'));
exec(bin('babel') + ' modules -d esm');

// Bundle the app
process.chdir(__dirname);
exec(bin('webpack') + ' --output-path "build" --output-filename "main.js"');

process.chdir(cwd);
