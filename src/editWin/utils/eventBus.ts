import { eventNotifyType } from "./constant";

/**
 * 事件消息总线 主要用来解藕model和view层的通信
 * 使用方法例如：
 * handlers = {
 *  render: [renderEngine, toolBarStatusManager]
 * }
 */
export class EventBus {
    handlers: Map<eventNotifyType, any[]> = new Map(); // key: eventtype/name value listeners

    constructor() {}

    registerEvent(eventType: eventNotifyType, handler: any) {
        if (!this.handlers.get(eventType)) {
            this.handlers.set(eventType, []);
        }
        this.handlers.get(eventType).push(handler);
    }

    dispatchEvent(eventType: eventNotifyType, args?: any) {
        const eventHandlers: any[] = this.handlers.get(eventType);
        if (!eventHandlers) {
            console.log('事件未被创建');
            return;
        }
        eventHandlers.forEach(handler => {
            handler.notify(eventType, args);
        })
    }

    hasEvent(eventType: eventNotifyType) {
        return this.handlers.get(eventType);
    }

    unregisterEvent(eventType: eventNotifyType) {}
}