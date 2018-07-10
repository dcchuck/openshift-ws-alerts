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

    Subscription Manager
        HAS
            WebSocket Connections
                HAVE
                    Subscribers
                    A subscriber can belong to any number of WebSocket Connections
*/

import * as assert from 'assert';

describe('Subscription Manager', () => {
    it('Exists', () => {
        assert.equal(true, true);
    })

    describe('Message Validation', () => {
        it('Calls the appropriate handler when the shape is correct', () => {

        })

        it('Responds to the client when the payload is incorrect', () => {

        })
    })

    describe('Adding A Subscription', () => {
        it('Creates a websocket connection & adds a subscriber when no previous connection exists', () => {

        })

        it('Adds the subscriber to an existing websocket connection when a previous connection exists', () => {

        })
    })

    describe('Removing A Subscription', () => {
        it('Removes the client from the request websocket subscription', () => {

        })

        it('Closes the connection if the removed subscription is the last one', () => {

        })

        it('Persists the connection when there are other subscribers', () => {

        })
    })

    describe('Receiving A WebSocket Connection Message', () => {
        it('Notifies the Subscribers', () => {

        })
    })
})