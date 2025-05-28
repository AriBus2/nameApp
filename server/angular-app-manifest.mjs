
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://AriBus2.github.io/nameApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/nameApp"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 524, hash: 'e9aa50122d3e35812016c13bece67bfbc19aca54e1f5fabccdd373a15f477f85', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: '2c0e5defc31e19b3aa0a5e16654f0e9ba81e2c3b06899aa64f68c00af286790c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1164, hash: '1672780240347349be3f471d492aa5c5ddad2beedaf147e379519ebfeaeff453', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
