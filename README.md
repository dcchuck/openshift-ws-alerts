# OpenShift WS Alerts

In this repo we build a simple websocket server that connects to an OpenShift instance and send alerts of completed builds.

## Server Side Environment Variables

* `TOKEN` Generate a token for a service account as documented [here](https://docs.openshift.com/container-platform/3.5/rest_api/index.html#rest-api-serviceaccount-tokens)
* `NODE_TLS_REJECT_UNAUTHORIZED` This is not a production flag but required if you are not using valid ssl certs (i.e. self signed, etc.)