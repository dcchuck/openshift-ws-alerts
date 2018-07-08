import * as http from 'http';
import * as WebSocket from 'ws';

const accessToken = process.env.TOKEN;

const appHost = process.env.APP_HOST;
const namespace = process.env.NAMESPACE;
// const ipaddr = process.env.PORT || process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";
const port = process.env.IP || process.env.OPENSHIFT_NODEJS_PORT || 8080

if (accessToken === undefined) {
    console.log('Warning! accessToken Undefined! See: https://docs.openshift.com/container-platform/3.6/rest_api/index.html#rest-api-authentication');
}

if (appHost === undefined) {
    console.log('Warning! appHost Undefined! Please set your client host.');
}

if (namespace === undefined) {
    console.log('Warning! namespace Undefined! Please set your client namepsace.');
}

const server = http.createServer();

const wsServer = new WebSocket.Server({ server: server });

// The user will
interface ISubscriptionMessage {
    action: 'subscribe' | 'unsubscribe';
    payload: ISubscriptionMessagePayload;
}

interface ISubscriptionMessagePayload {
    eventName: string;
    namespace?: string;
}

function addSubscription(requestIp: string, payload: ISubscriptionMessagePayload) {
    console.log('Add subscription called')
}

function removeSubscription(requestIp: string, payload: ISubscriptionMessagePayload) {
    console.log('Remove subscription called')
}

server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
    wsServer.on('connection', (ws, req) => {
        const requestIp = req.connection.remoteAddress;
        console.log(`Connected IP: ${requestIp}`);
        ws.on('message', (m) => {
            console.log(`Received Message`)
            const connectionMessage: ISubscriptionMessage = JSON.parse(m.toString());
            try {
                if (connectionMessage.action === 'subscribe') {
                    addSubscription(requestIp, connectionMessage.payload);

                } else if (connectionMessage.action === 'unsubscribe') {
                    removeSubscription(requestIp, connectionMessage.payload);
                }
            } catch (e) {
                console.log(`Error parsing connection message ${e}`);
            }
        });
    });

    // const ws = new WebSocket(`wss://${appHost}/oapi/v1/watch/namespaces/${namespace}/builds?access_token=${accessToken}`, { origin: `https://${appHost}` });
    // console.log(ws);
    // wsServer.broadcast = function broadcast(data: string) {
    //     wsServer.clients.forEach(function each(client) {
    //         if (client.readyState === WebSocket.OPEN) {
    //             client.send(data);
    //         }
    //     });
    // };
    // ws.onmessage = (message) => {
    //     console.log('message received!')
    //     const messageData = JSON.parse(message.data);
    //     const appName = messageData.object.metadata.labels.app;
    //     if (messageData.object.status.phase === "Complete" && messageData.type === "MODIFIED") {
    //         wsServer.broadcast(JSON.stringify({ appName: appName }));
    //     }
    // };
})
