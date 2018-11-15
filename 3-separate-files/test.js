const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const outputBundle = path.join(__dirname, 'build/main.js');
const code = fs.readFileSync(outputBundle);

if (code.includes('"hash"')) {
  console.log(
    chalk.red('❌ Output bundle contains traces of createHashHistory')
  );
} else {
  console.log(
    chalk.green('✓ Output bundle contains no trace of createHashHistory')
  );
}

if (code.includes('"Hash Router"')) {
  console.log(chalk.red('❌ Output bundle contains traces of HashRouter'));
} else {
  console.log(chalk.green('✓ Output bundle contains no trace of HashRouter'));
}
