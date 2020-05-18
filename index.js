/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const os = require('os');
const proxy = require('koa2-proxy-middleware');

const app = new Koa();
const port = process.env.port || 3333;
const staticPath = './dist';
const hostUrl = process.env.hostUrl || 'http://transfer.lian-med.com:9988';
const formDescriptionUrl = process.env.formDescriptionUrl || 'http://127.0.0.1:3335';

// 获取本机ip地址
function getIPAdress() {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

app.use(static(path.join(__dirname, staticPath)));
const options = {
  targets: {
    '/api/form-descriptions(.*)': {
      target: formDescriptionUrl,
      changeOrigin: true,
      // pathRewrite: { '^/server': '' },
    },
    // (.*) means anything
    '/api/(.*)': {
      target: hostUrl,
      changeOrigin: true,
    },
  },
};

app.use(proxy(options));

app.listen(port, () => {
  console.log(`apiHostUrl: ${hostUrl}, formDescriptionUrl: ${formDescriptionUrl}`);
  console.log(`App running at: http://localhost:${port}`);
  console.log(`- Local: http://localhost:${port}`);
  console.log(`- Network: http://${getIPAdress()}:${port}`);
});
