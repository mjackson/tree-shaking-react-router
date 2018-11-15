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
process.chdir(path.resolve(__dirname));

// Build the packages
exec(bin('rollup') + ' -c');

// Bundle the app
exec(bin('webpack') + ' --output-path "build" --output-filename "main.js"');

process.chdir(cwd);
