import { ParagraphNode } from "../editModel/text/paragraph";

/**
 * 全局缓存数据管理 htmlfrag html-model-map
 */
export class CacheManager {
    htmlParaNodeMap: WeakMap<Node, ParagraphNode> = new Map();
    getParaNodeFromHtmlEle(ele: HTMLElement | Node) {
        return this.htmlParaNodeMap.get(ele);
    }

    setParaNodeFromHtmlEle(ele: HTMLElement, paraNode: ParagraphNode) {
        this.htmlParaNodeMap.set(ele, paraNode);
    }

    hasParaNodeFromHtmlEle(ele: HTMLElement) {
        return this.htmlParaNodeMap.has(ele);
    }

    delParaNodeFromHtmlEle(ele: HTMLElement) {
        return this.htmlParaNodeMap.delete(ele);
    }
}