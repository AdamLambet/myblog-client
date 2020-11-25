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
        // let count: number = 0; // 定义一个累加计数器 来确定在哪个content下添加内容
        // this.sContentNodes.forEach( (node: ContentNode) => {
        //     const text: string = node.getText();
        //     const textLen: number = text.length;
        //     count += textLen;
        //     if (count >= offset) {
        //         const curOffset: number = textLen - (count - offset);
        //         const newStr = `${text.substring(0, curOffset) + content + text.substring(curOffset)}`;
        //         node.setText(newStr);
        //         return true;
        //     }
        // })
        const text: string = focusNode.getText();
        const newStr = `${text.substring(0, offset) + content + text.substring(offset)}`;
        focusNode.setText(newStr);
        return true;
    }
}