import { seedEditor, seeEdt } from "../../../seedModule";
import { NodeNames } from "../../../utils/constant";
import { CacheManager } from "../../cache/cacheManager";
import { ContentNode } from "../text/content";
import { ParagraphNode } from "../text/paragraph";
import { ParaRangeManager } from "./paraRangeManager";

/**
 * 描速当前range 在model段落中的位置信息
 */
export class SelectionManager {
    sEditor: seedEditor = seeEdt();
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
        const sel: Selection = window.getSelection();
        const range: Range = sel.getRangeAt(0);
        const starContainer: Node = range.startContainer;
        const endContainer: Node = range.endContainer;
        const startOffset: number = range.startOffset;
        const endOffset: number = range.endOffset;
        const isCollaps: boolean = range.collapsed;

        // startSelection
        const sDomPara: Node = this.findParagraph(starContainer);
        const sParaModelNode: ParagraphNode = this.getParagraphNode(sDomPara);

        // endselection
    }

    /**
     * 根据当前选取所在节点 找出所在段落
     * @param pNode 
     */
    findParagraph(pNode: Node): Node {
        if (pNode.nodeName === NodeNames.PARA) {
            return pNode;
        } else {
            return this.findParagraph(pNode.parentNode);
        }
    }

    /**
     * 根据当前htmlelement获取对应model
     * @param pNode 
     */
    getParagraphNode(pNode: Node): ParagraphNode {
        const cacheMr: CacheManager = this.sEditor.imp().getCacheMr();
        const paraNode: ParagraphNode = cacheMr.getParaNodeFromHtmlEle(pNode);
        return paraNode;
    }

    /**
     * 确定当前光标是在段落下的哪个节点以及偏移量
     * @param pNode 
     * @param cNode 光标所在文本节点
     * @param sOffset 光标偏移量
     * @return { ContentNode, Offset}
     */
    getSelectionOffset(pNode: ParagraphNode, cNode: Node, sOffset: number) {
        const contents: ContentNode[] = pNode.getContentNodes();
        if(cNode.nodeName === NodeNames.PARA) { // 当前光标位置处于一个空段落中
            return {
                cNode,
                sOffset
            }
        }
        
    }
}