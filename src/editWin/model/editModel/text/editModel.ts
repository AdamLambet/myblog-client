import { seedEditor, seeEdt } from "../../../seedModule";
import { eventNotifyType } from "../../../utils/constant";
import { EventBus } from "../../../utils/eventBus";
import { SelectionManager } from "../selection/selManager";
import { ParagraphNode } from "./paragraph";

/**
 * 富文本核心model
 */
export class EditModel {
    sEditor: seedEditor = seeEdt();
    sParas: ParagraphNode[];
	sSelection: SelectionManager;

    constructor(initDom?: string) {
        this.initEditModel(initDom);
    }

    initEditModel(initDom: string) {
        if (initDom) {} // todo
        this.sParas = [new ParagraphNode()];
        this.registerEvent();
        this.dispatchRender();
    }
    
    registerEvent() {
        const eventBus: EventBus = this.sEditor.sEventBus;
        if (!eventBus.hasEvent(eventNotifyType.input)) {
            eventBus.registerEvent(eventNotifyType.input, this);
        }

        if (!eventBus.hasEvent(eventNotifyType.delete)) {
            eventBus.registerEvent(eventNotifyType.delete, this);
        }
    }

    notify(eventType: eventNotifyType, args?: any) {
        switch(eventType) {
            case eventNotifyType.input:
                const data = args.data;
                console.log(data);
                break;
            case eventNotifyType.delete:
                break;
            default:
                break;
        }
    }

    dispatchRender() {
        const eventBus: EventBus = this.sEditor.sEventBus;
        eventBus.dispatchEvent(eventNotifyType.render);
    }

    getParas(): ParagraphNode[] {
        return this.sParas;
    }

    getSelection(): SelectionManager {
        return this.sSelection;
    }
}