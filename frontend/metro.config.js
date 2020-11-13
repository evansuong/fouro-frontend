const path = require('path');

const extraNodeModules = {
  'backend': path.resolve(__dirname + '/../backend'),
  'components': path.resolve(__dirname + '/../frontend/src/components')
};

const watchFolders = [
  path.resolve(__dirname + '/../backend'),
  path.resolve(__dirname + '/../frontend/src/components'),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  }, 
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from common/ to local node_modules
        name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
};