import { ParagraphNode } from "../text/paragraph";

/**
 * 描速光标在段落中的位置 通常会创建两个实例 对应range的start，end
 */
export class ParaRangeManager {
    sParaNode: ParagraphNode;
    sOffset: number;

    constructor(sPara: ParagraphNode, sOffset: number) {
        this.sParaNode = sPara;
        this.sOffset = sOffset;
    }

    getParaNode() {
        return this.sParaNode;
    }

    getOffset() {
        return this.sOffset;
    }
}