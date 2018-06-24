// This demo is deployed using a self signed cert - do not use this line in production!
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const demoToken = process.env.TOKEN;
const WebSocket = require('ws');

const webSocketUrl = `wss://129.146.147.219:8443/oapi/v1/watch/namespaces/my-test/builds?access_token=${demoToken}`
const ws = new WebSocket(webSocketUrl);

console.log(webSocketUrl);

ws.on('message', function incoming(data) {
    console.log(data);
});