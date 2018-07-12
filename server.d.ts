export interface ISubscriptionMessage {
    action: 'subscribe' | 'unsubscribe';
    payload: ISubscriptionMessagePayload;
}
export interface ISubscriptionMessagePayload {
    eventName: string;
    namespace?: string;
}
