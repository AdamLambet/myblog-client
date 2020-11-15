import { seedEditor } from "../seedModule";
import { SeedEditorView } from "../view/editview/editorview";
import { ProxyInputArea } from "../view/proxyinput/proxyInput";
import { ToolBar } from "../view/toolbar/toolbar";

export class seedImp {
    sEditor: seedEditor
    constructor(sEditor: seedEditor) {
        this.sEditor = sEditor;
    }

    /**
     * 查看当前浏览器运行环境
     */
    checkBrowserEnv() {}

    frameDomInit() {
        this.sEditor.rootNode = document.getElementById(this.sEditor.selectorId);
        this.sEditor.editorContainer = document.createElement('div');
        this.sEditor.rootNode.appendChild(this.sEditor.editorContainer);
        this.sEditor.editorContainer.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.15)';
        this.sEditor.editorContainer.style.border = '1px solid #c9d8db';
        this.sEditor.editorContainer.style.margin = '0 auto';
        this.sEditor.editorContainer.style.width = `${this.sEditor.containerConfig.width}px`;
    }

    toolBarInit() {
        this.sEditor.toolBarDiv = document.createElement('div');
        this.sEditor.editorContainer.appendChild(this.sEditor.toolBarDiv);
        this.sEditor.sToolBarView = new ToolBar(this.sEditor.toolBarDiv, this.sEditor.toolbarConfig);
    }

    editPageInit() {
        this.sEditor.editorDiv = document.createElement('div');
        this.sEditor.editorContainer.appendChild(this.sEditor.editorDiv);
        this.sEditor.sEditorView = new SeedEditorView(this.sEditor.editorDiv, this.sEditor.pageConfig);
    }

    proxyInputInit() {
        this.sEditor.proxyInputDiv = document.createElement('textarea');
        this.sEditor.editorContainer.appendChild(this.sEditor.proxyInputDiv);
        this.sEditor.sProxyInput = new ProxyInputArea(this.sEditor.proxyInputDiv);
    }

    grabFocus() {
        this.sEditor.editorDiv.focus();
    }
}