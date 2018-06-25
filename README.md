# OpenShift WS Alerts

In this repo we build a simple websocket server that connects to an OpenShift instance and send alerts of completed builds.

## About This Project

The OpenShift REST APIs allow you to control your OpenShift instance. In this case we are only after some information we don't mind making available - a new build being triggered for a project in a namespace. There are 4 environment variables you will need to set to use this server side application:

* 'TOKEN' - This project uses a `TOKEN` environment variable to authenticate the connection to OpenShift & retrieve information about the builds. Generate a token for a service account as documented [here](https://docs.openshift.com/container-platform/3.5/rest_api/index.html#rest-api-serviceaccount-tokens)

* 'NAMESPACE' - Since we are listening on a specific project, this is required.

* 'APP_HOST' - The host address of your OpenShift instance.

## Relevant Documentation

* You can emulate this pattern to retrieve other information about your OpenShift instance (also cluster wide, not just namespace specific). The OpenShift REST API documentation can be found [here](https://docs.openshift.com/container-platform/3.5/rest_api/index.html).