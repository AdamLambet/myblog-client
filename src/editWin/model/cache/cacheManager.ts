import { ContentNode } from "../editModel/text/content";
import { ParagraphNode } from "../editModel/text/paragraph";

type contentDomToNodeMap = WeakMap<Node, ContentNode>;
/**
 * 全局缓存数据管理 htmlfrag html-model-map
 */
export class CacheManager {
    paraDomToNodeMap: WeakMap<Node, ParagraphNode>; // model中段落节点和dom节点的对应关系
    paraContentsNodeMap: WeakMap<ParagraphNode, contentDomToNodeMap>;
    constructor() {
        this.paraDomToNodeMap = new WeakMap();
    }
    getParaNodeFromHtmlEle(ele: HTMLElement | Node) {
        return this.paraDomToNodeMap.get(ele);
    }

    setParaNodeFromHtmlEle(ele: HTMLElement, paraNode: ParagraphNode) {
        this.paraDomToNodeMap.set(ele, paraNode);
    }

    hasParaNodeFromHtmlEle(ele: HTMLElement) {
        return this.paraDomToNodeMap.has(ele);
    }

    delParaNodeFromHtmlEle(ele: HTMLElement) {
        return this.paraDomToNodeMap.delete(ele);
    }

    getParaContentsNodeMap(para: ParagraphNode) {
        const pcnm = this.paraContentsNodeMap.get(para);
        if (!pcnm) {
            this.paraContentsNodeMap.set(para, this.contentDomToNodeMapFactory());
        }
        return pcnm;
    }

    setParaContentsNodeMap(para: ParagraphNode, cToNode: contentDomToNodeMap) {

    }

    contentDomToNodeMapFactory() {
        const contentToNodeMap: contentDomToNodeMap = new WeakMap();
        return contentToNodeMap;
    }
}