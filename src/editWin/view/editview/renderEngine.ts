import { seedEditor, seeEdt } from "../../seedModule";
import { EventBus } from "../../utils/eventBus";

/**
 * 将editmodel中的数据转成Dom渲染
 * 
 */
export class RenderEngine {
    sEditor: seedEditor = seeEdt();
    constructor() {
       this.initEventListen();
    }

    initEventListen() {
        const eventBus: EventBus = this.sEditor.sEventBus;
        eventBus.registerEvent('render', this);
    }

    notify(eventType: string, args?: any[]) {
        console.log('eventType', eventType);
    }

    translateToDom() {}
}