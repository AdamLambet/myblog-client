import { ContentAttrs } from "../../model/editModel/text/attribute";
import { ContentNode } from "../../model/editModel/text/content";
import { EditModel } from "../../model/editModel/text/editModel";
import { ParagraphNode } from "../../model/editModel/text/paragraph";
import { seedEditor, seeEdt } from "../../seedModule";
import { eventNotifyType } from "../../utils/constant";
import { EventBus } from "../../utils/eventBus";
import { SeedEditorView } from "./editorview";

/**
 * dom片段tag
 */
export const DomFragmentTag = {
    PARASTART: '<p>',
    PARAEND: '</p>',
    LINEBREAK: '<br>',
    TEXTSTART: '<text>',
    TEXTEND: '</text>',
}

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
        const eventBus: EventBus = this.sEditor.sEventBus;
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
        const editModel: EditModel = this.sEditor.sEditModel;
        const paraNodeList: ParagraphNode[] = editModel.getParas();
        let domStr: string = '';
        for (let i = 0; i < paraNodeList.length; i = i + 1) {
            const paraNode: ParagraphNode = paraNodeList[i];
            const contenNodeList: ContentNode[] = paraNode.getContentNodes();
            let paraDomStr: string = '';
            domStr += DomFragmentTag.PARASTART;
            for (let j = 0; j < contenNodeList.length; j = j + 1) {
                const contentNode: ContentNode = contenNodeList[j];
                const text: string = contentNode.getText();
                if (!text) { // 无内容直接跳出
                    continue;
                }
                const attrs: ContentAttrs = contentNode.getAttrs();
                if (!attrs) {  // 纯文本节点
                    paraDomStr += `${DomFragmentTag.TEXTSTART}${text}${DomFragmentTag.TEXTEND}`;
                }
            }
            if (!paraDomStr) { 
                domStr += DomFragmentTag.LINEBREAK;  // 段落占位
            } else {
                domStr += paraDomStr;
            }
            domStr += DomFragmentTag.PARAEND;
        }
        console.log(domStr);
        this.applyToView(domStr);
    }

    applyToView(domStr: string) {
        const editview: SeedEditorView = this.sEditor.sEditorView;
        const editViewEle: HTMLDivElement = editview.getViewElement();
        editViewEle.innerHTML = '';
        editViewEle.innerHTML = domStr;
    }
}