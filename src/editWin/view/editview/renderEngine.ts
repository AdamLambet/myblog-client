import { CacheManager } from "../../model/cache/cacheManager";
import { ContentAttrs } from "../../model/editModel/text/attribute";
import { ContentNode } from "../../model/editModel/text/content";
import { EditModel } from "../../model/editModel/text/editModel";
import { ParagraphNode } from "../../model/editModel/text/paragraph";
import { seedEditor, seeEdt } from "../../seedModule";
import { eventNotifyType, NodeNames } from "../../utils/constant";
import { EventBus } from "../../utils/eventBus";
import { SeedEditorView } from "./editorview";

/**
 * 将editmodel中的数据转成Dom渲染
 * 
 */
export class RenderEngine {
    sEditor: seedEditor = seeEdt();
    constructor() {
       this.registerEvent();
    }

    registerEvent() {
        const eventBus: EventBus = this.sEditor.imp().getEventBus();
        eventBus.registerEvent(eventNotifyType.render, this);
    }

    notify(eventType: eventNotifyType, args?: any) {
        switch(eventType) {
            case eventNotifyType.render:
                setTimeout(() => { this.render() }, 0);
                break;
        }
    }

    render() {
        this.sEditor.imp().getCacheMr().htmlParaNodeMap = new Map(); // todo
        const editModel: EditModel = this.sEditor.imp().getEditModel();
        const paraNodeList: ParagraphNode[] = editModel.getParas();
        for (let i = 0; i < paraNodeList.length; i = i + 1) {
            const paraNode: ParagraphNode = paraNodeList[i];
            const contenNodeList: ContentNode[] = paraNode.getContentNodes();
            const ParaElement: HTMLElement = this.getElement(NodeNames.PARA);
            for (let j = 0; j < contenNodeList.length; j = j + 1) {
                const contentNode: ContentNode = contenNodeList[j];
                const text: string = contentNode.getText();
                if (!text) { // 无内容直接跳出
                    continue;
                }
                const attrs: ContentAttrs = contentNode.getAttrs();
                if (!attrs) {  // 纯文本节点
                    const textElement: HTMLElement = this.getElement(NodeNames.TEXT);
                    textElement.textContent = text;
                    ParaElement.appendChild(textElement);
                }
            }
            if (!ParaElement.childNodes || ParaElement.childNodes.length === 0) {
                const brElement: HTMLElement = this.getElement(NodeNames.LINEBREAK);
                ParaElement.appendChild(brElement);  // 段落占位
            }
            this.storeEleToCache(ParaElement, paraNode);
            this.applyToView(ParaElement as HTMLParagraphElement);
        }
    }

    getElement(el: string) {
        return document.createElement(el);
    }


    storeEleToCache(ele: HTMLElement, paraNode: ParagraphNode) {
        const cacheMr: CacheManager = this.sEditor.imp().getCacheMr();
        if (cacheMr.hasParaNodeFromHtmlEle(ele)) {
            cacheMr.delParaNodeFromHtmlEle(ele);
        }
        cacheMr.setParaNodeFromHtmlEle(ele, paraNode);
    }

    applyToView(ParaEle: HTMLParagraphElement) {
        const editview: SeedEditorView = this.sEditor.imp().getEditView();
        const editViewEle: HTMLDivElement = editview.getViewElement();
        editViewEle.innerHTML = '';
        editViewEle.appendChild(ParaEle);
    }
}