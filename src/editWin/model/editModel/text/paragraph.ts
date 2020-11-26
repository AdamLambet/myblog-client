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

    insertContentStr(content: string, focusNode: ContentNode, offset: number) {
        const text: string = focusNode.getText();
        const newStr = `${text.substring(0, offset) + content + text.substring(offset)}`;
        focusNode.setText(newStr);
        return true;
    }
}