import { seedEditor, seeEdt } from "../../../seedModule";
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
        this.renderDispatch();
    }

    renderDispatch() {
        const eventBus: EventBus = this.sEditor.sEventBus;
        eventBus.dispatchEvent('render');
    }
}