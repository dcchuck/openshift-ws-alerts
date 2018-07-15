export interface ISubscriptionMessage {
    action: 'subscribe' | 'unsubscribe';
    payload: ISubscriptionMessagePayload;
}
interface ISubscriptionMessagePayload {
    eventName: string;
    namespace?: string;
}
export {};
