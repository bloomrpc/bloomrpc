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
    'npm rebuild --target=3.0.14 --runtime=electron --dist-url=https://atom.io/download/electron';

  const cmd =
    process.platform === 'win32'
      ? electronRebuildCmd.replace(/\//g, '\\')
      : electronRebuildCmd;

  execSync(cmd, {
    cwd: path.join(__dirname, '..', '..', 'app')
  });
}
