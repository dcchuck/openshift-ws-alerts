"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubscriptionManager {
    constructor() {
        this.subscriptions = [];
    }
    processMessage(message) {
        if (!(message.action && message.payload.eventName && message.payload)) {
            throw new Error("Message shape invalid. Messages require an action and a payload with an eventName.");
        }
        if (message.action === 'subscribe') {
            this.addSubscription(message);
        }
        else {
            this.removeSubscription(message);
        }
    }
    addSubscription(message) {
        return;
    }
    removeSubscription(message) {
        return;
    }
}
exports.default = SubscriptionManager;
//# sourceMappingURL=subscription_manager.js.map