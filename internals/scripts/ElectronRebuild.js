const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const { dependencies } = require('../../app/package.json');

const nodeModulesPath = path.join(__dirname, '..', '..', 'app', 'node_modules');

if (
  Object.keys(dependencies || {}).length > 0 &&
  fs.existsSync(nodeModulesPath)
) {
  // THIS NOTE IS COPIED FROM https://www.npmjs.com/package/grpc

  // ABOUT ELECTRON
  // The official electron documentation recommends to build all of your native packages from source. While the reasons behind this are technically good - many native extensions won't be packaged to work properly with electron - the gRPC source code is fairly difficult to build from source due to its complex nature, and we're also providing working electron pre-built binaries. Therefore, we recommend that you do not follow this model for using gRPC with electron. Also, for the same reason, electron-rebuild will always build from source. We advise you to not use this tool if you are depending on gRPC. Please note that there's not just one way to get native extensions running in electron, and that there's never any silver bullet for anything. The following instructions try to cater about some of the most generic ways, but different edge cases might require different methodologies.

  // The best way to get gRPC to work with electron is to do this, possibly in the postinstall script of your package.json file:

  // npm rebuild --target=2.0.0 --runtime=electron --dist-url=https://atom.io/download/electron
  // Note that the 2.0.0 above is the electron runtime version number. You will need to update this every time you go on a different version of the runtime.

  // If you have more native dependencies than gRPC, and they work better when built from source, you can explicitely specify which extension to build the following way:

  // npm rebuild --build-from-source=sqlite3 --target=2.0.0 --runtime=electron --dist-url=https://atom.io/download/electron
  // This way, if you depend on both grpc and sqlite3, only the sqlite3 package will be rebuilt from source, leaving the grpc package to use its precompiled binaries.
  
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
