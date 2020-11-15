import { DefaultContainerConfig, EditorContainerConfig, PageSizeConfig, ToolBarConfig } from "./config/page.config";
import { SeedEditorView } from "./view/editview/editorview";

import './assets/style/toolbar.scss';
import { ProxyInputArea } from "./view/proxyinput/proxyInput";
import { InputManager } from "./controller/InputManager";
import { seedImp } from "./utils/seedimp";
import { ToolBar } from "./view/toolbar/toolbar";

export class seedEditor {
    // config
    containerConfig: EditorContainerConfig;
    pageConfig: PageSizeConfig;
    toolbarConfig: ToolBarConfig;

    // dom elment
    rootNode: HTMLElement;
    editorContainer: HTMLDivElement;
    selectorId: string;
    toolBarDiv: HTMLDivElement;
    editorDiv: HTMLDivElement;
    proxyInputDiv: HTMLTextAreaElement;

    // event-implement-util
    seedimp: seedImp

    // view
    sEditorView: SeedEditorView;
    sToolBarView: ToolBar;
    sProxyInput: ProxyInputArea;

    // controller
    sInputManager: InputManager;

    // model

    constructor(selector: string, containerConfig: EditorContainerConfig = {},  toolbarConfig: ToolBarConfig = {}, pageConfig: PageSizeConfig = {}) {
        this.selectorId = selector;

        this.containerConfig = Object.assign(DefaultContainerConfig, containerConfig);
        this.toolbarConfig = toolbarConfig;
        this.pageConfig = pageConfig;
    }

    /**
     * lifecicle
     * beforeinit -> inited -> beforeDestory -> destoryed
     */
    beforeinit() {
        this.seedimp = new seedImp(this);
        this.seedimp.checkBrowserEnv();
    }

    inited() {
        this.sInputManager = new InputManager(this.editorDiv);
        this.seedimp.grabFocus();
    }

    beforeDestory() {}

    destoryed() {}


    /**
     * 初始化dom和配置
     * @param selector 根结点选择器id
     */
    init () {
        this.beforeinit();
        this.seedimp.frameDomInit();
        this.seedimp.toolBarInit();
        this.seedimp.editPageInit();
        // this.seedimp.proxyInputInit();
        this.inited();
    }
}