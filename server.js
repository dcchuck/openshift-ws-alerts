const http = require('http');
const WebSocket = require('ws');

const demoToken = process.env.TOKEN;

const appHost = process.env.APP_HOST;
const namespace = process.env.NAMESPACE;
const ipaddr = process.env.PORT || process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";
const port = process.env.IP || process.env.OPENSHIFT_NODEJS_PORT || 8080

const server = http.createServer();

const wsServer = new WebSocket.Server({ server: server });

server.listen(port, ipaddr, () => {
    console.log('listening!')
    const ws = new WebSocket(`wss://${appHost}/oapi/v1/watch/namespaces/${namespace}/builds?access_token=${demoToken}`, { origin: `https://${appHost}` });
    console.log(ws);
    wsServer.broadcast = function broadcast(data) {
        wsServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    };
    ws.onmessage = (message) => {
        console.log('message received!')
        const messageData = JSON.parse(message.data);
        const appName = messageData.object.metadata.labels.app;
        if (messageData.object.status.phase === "Complete" && messageData.type === "MODIFIED") {
            wsServer.broadcast({ appName: appName };
        }
    };
})