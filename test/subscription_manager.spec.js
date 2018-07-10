"use strict";
/*

Describe Subscription Manager
    Is it a subscription manager?

It receives a subscription message

    Validates the message
        Valid -> Proceed
        Invalid -> Send error message back to the attempted subscriber

    Add Subscription Message
        Creates a websocket connection & add a subscriber when a WS connection doesn't exist
        Adds the clients to an existing subscriber when it does exist

    Remove Subscription Message
        Removes the client from the existing websocket connection
        Closes the websocket connection if there are no other subscribers
        Keeps the WS connection open if there are other subscribers

    Receives A Message In a Subscription's WS
        Notifies only subsribing clients

*/
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
describe('Subscription Manager', () => {
    it('Exists', () => {
        assert.equal(true, true);
    });
});
//# sourceMappingURL=subscription_manager.spec.js.map