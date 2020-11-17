import { SelectionManager } from "../selection/selManager";
import { ParagraphNode } from "./paragraph";

/**
 * 富文本核心model
 */
export class EditModel {
    sParas: ParagraphNode[];
	sSelection: SelectionManager;

    constructor(initDom?: string) {
        this.initEditModel(initDom);
    }

    initEditModel(initDom: string) {
        if (initDom) {} // todo
        this.sParas = [new ParagraphNode()];
    }
}