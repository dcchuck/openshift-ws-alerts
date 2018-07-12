"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const sinon = require("sinon");
const subscription_manager_1 = require("../src/subscription_manager");
describe('Subscription Manager', () => {
    describe('Message Validation', () => {
        const TestSubscriptionManager = new subscription_manager_1.default;
        it('Calls the appropriate handler when the shape is correct', () => {
            const correctlyShapedSubscribeMessageForTest = {
                action: 'subscribe',
                payload: {
                    eventName: 'build',
                    namespace: 'test'
                }
            };
            const correctlyShapedUnsubscribeMessageForTest = {
                action: 'unsubscribe',
                payload: {
                    eventName: 'build'
                }
            };
            const addSubscriptionSpy = sinon.spy(subscription_manager_1.default.prototype, 'addSubscription');
            const removeSubscriptionSpy = sinon.spy(subscription_manager_1.default.prototype, 'removeSubscription');
            TestSubscriptionManager.processMessage(correctlyShapedSubscribeMessageForTest);
            assert(addSubscriptionSpy.calledOnce);
            TestSubscriptionManager.processMessage(correctlyShapedUnsubscribeMessageForTest);
            assert(removeSubscriptionSpy.calledOnce);
            addSubscriptionSpy.restore();
            removeSubscriptionSpy.restore();
        });
        it('Responds to the client when the payload is incorrect', () => {
            const incorrectlyShapedMessageForTest = {
                action: 'subscribe'
            };
            assert.throws(
            //@ts-ignore
            () => TestSubscriptionManager.processMessage(incorrectlyShapedMessageForTest), Error, 'Message shape invalid. Messages require an action and a payload with an eventName.');
        });
    });
    // describe('Adding A Subscription', () => {
    //     it('Creates a websocket connection & adds a subscriber when no previous connection exists', () => {
    //     })
    //     it('Adds the subscriber to an existing websocket connection when a previous connection exists', () => {
    //     })
    // })
    // describe('Removing A Subscription', () => {
    //     it('Removes the client from the request websocket subscription', () => {
    //     })
    //     it('Closes the connection if the removed subscription is the last one', () => {
    //     })
    //     it('Persists the connection when there are other subscribers', () => {
    //     })
    // })
    // describe('Receiving A WebSocket Connection Message', () => {
    //     it('Notifies the Subscribers', () => {
    //     })
    // })
});
//# sourceMappingURL=subscription_manager.spec.js.map