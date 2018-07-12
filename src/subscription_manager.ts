import { ISubscriptionMessage, ISubscriptionMessagePayload } from '../server';

export default class SubscriptionManager {
    public subscriptions: any[];

    constructor() {
        this.subscriptions = [];
    }

    public processMessage(message: ISubscriptionMessage): void {
        if (!(message.action && message.payload.eventName && message.payload)) {
            throw new Error("Message shape invalid. Messages require an action and a payload with an eventName.")
        }

        if (message.action === 'subscribe') {
            this.addSubscription(message);
        } else {
            this.removeSubscription(message);
        }
    }

    private addSubscription(message: ISubscriptionMessage): void {
        return;
    }

    private removeSubscription(message: ISubscriptionMessage): void {
        return;
    }
}