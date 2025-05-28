
export default {
  basePath: 'https://AriBus2.github.io/nameApp',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
