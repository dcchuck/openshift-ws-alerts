import { ISubscriptionMessage } from '../server';
export default class SubscriptionManager {
    subscriptions: any[];
    constructor();
    processMessage(message: ISubscriptionMessage): void;
    private addSubscription;
    private removeSubscription;
}
