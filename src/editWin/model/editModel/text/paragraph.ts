import Paragraph from "antd/lib/skeleton/Paragraph";
import { ContentNode } from "./content";

/**
 * 段落节点类
 */
export class ParagraphNode {
    sContentNodes: ContentNode[];

    constructor(contentNode: ContentNode[] = []) {
        this.initParaNode(contentNode);
    }

    initParaNode(contentNode?: ContentNode[]) {
        if (contentNode) {}  // todo
        this.sContentNodes = [new ContentNode()];
    }

    getContentNodes(): ContentNode[] {
        return this.sContentNodes;
    }
}