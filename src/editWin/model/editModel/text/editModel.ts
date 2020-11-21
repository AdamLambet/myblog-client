import { seedEditor, seeEdt } from "../../../seedModule";
import { eventNotifyType } from "../../../utils/constant";
import { EventBus } from "../../../utils/eventBus";
import { ParaRangeManager } from "../selection/paraRangeManager";
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
        this.sSelection = new SelectionManager(this.sParas[0], 0, this.sParas[0], 0);
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

    notify(eventType: eventNotifyType, args?: any) {
        switch(eventType) {
            case eventNotifyType.input:
                const data = args.data;
                this.insertElement(data);
                this.dispatchRender();
                break;
            case eventNotifyType.delete:
                break;
            default:
                break;
        }
    }

    insertElement(data: string | Object) {
        const sel: SelectionManager = this.getSelection();
        sel.syncSelection();
        const startRange: ParaRangeManager = sel.getStartRange();
        const endRange: ParaRangeManager = sel.getEndRange();
        const isCollaps: boolean = sel.isCollaps();
        if (typeof(data) === 'string') { // 纯文本
            if (isCollaps) {
                const paraNode: ParagraphNode = startRange.getParaNode();
                const offset: number = startRange.getOffset();
                return paraNode.insertContentStr(data, offset);
            } else {}
        }
    }
}