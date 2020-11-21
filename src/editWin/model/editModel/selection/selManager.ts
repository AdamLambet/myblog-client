import { ParagraphNode } from "../text/paragraph";
import { ParaRangeManager } from "./paraRangeManager";

/**
 * 描速当前range 在model段落中的位置信息
 */
export class SelectionManager {
    sStartRange: ParaRangeManager;
    sEndRange: ParaRangeManager;
    constructor(sPara: ParagraphNode, sOffset: number, ePara: ParagraphNode, eOffset: number) {
       this.sStartRange = new ParaRangeManager(sPara, sOffset);
       this.sEndRange = new ParaRangeManager(ePara, eOffset);
    }

    getStartRange() {
        return this.sStartRange;
    }

    getEndRange() {
        return this.sEndRange;
    }

    isCollaps() {
        const rStartPara = this.sStartRange.getParaNode();
        const rEndPara = this.sEndRange.getParaNode();
        const sOffset = this.sStartRange.getOffset();
        const eOffset = this.sEndRange.getOffset();
        return (rStartPara === rEndPara && sOffset === eOffset);
    }

    syncSelection() { // 同步当前编辑器selection信息 转化成model

    }
}