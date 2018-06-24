const http = require('http');
const WebSocket = require('ws');

const demoToken = process.env.TOKEN;

const host = '129.146.147.219:8443';
const ipaddr = process.env.PORT || process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";
const port = process.env.IP || process.env.OPENSHIFT_NODEJS_PORT || 8080

console.log(ipaddr);
console.log(port);

const server = http.createServer();

const wsServer = new WebSocket.Server({ server: server });

server.listen(port, ipaddr, () => {
    console.log('listening!')
    const ws = new WebSocket(`wss://${host}/oapi/v1/watch/namespaces/my-test/builds?access_token=${demoToken}`, { origin: `https://${host}` });
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
            wsServer.broadcast(`New build complete - ${appName} New Version Available!`);
        }
    };
})