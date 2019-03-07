const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const { dependencies } = require('../../app/package.json');

const nodeModulesPath = path.join(__dirname, '..', '..', 'app', 'node_modules');

if (
  Object.keys(dependencies || {}).length > 0 &&
  fs.existsSync(nodeModulesPath)
) {
  const electronRebuildCmd =
    '../node_modules/.bin/electron-rebuild --parallel --force --types prod,dev,optional --version 3.0.14 --module-dir .';

  const cmd =
    process.platform === 'win32'
      ? electronRebuildCmd.replace(/\//g, '\\')
      : electronRebuildCmd;

  execSync(cmd, {
    cwd: path.join(__dirname, '..', '..', 'app')
  });
}
