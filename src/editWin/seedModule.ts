import { DefaultContainerConfig, EditorContainerConfig, PageSizeConfig, ToolBarConfig } from "./config/page.config";
import { SeedEditorView } from "./view/editview/editorview";

import './assets/style/toolbar.scss';
import { ProxyInputArea } from "./view/proxyinput/proxyInput";
import { InputManager } from "./controller/InputManager";
import { seedImp } from "./utils/seedimp";
import { ToolBar } from "./view/toolbar/toolbar";
import { EditModel } from "./model/editModel/text/editModel";
import { EventBus } from "./utils/eventBus";
import { RenderEngine } from "./view/editview/renderEngine";
import { CacheManager } from "./model/cache/cacheManager";

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
    seedimp: seedImp;

    // view
    sEditorView: SeedEditorView;
    sToolBarView: ToolBar;
    sProxyInput: ProxyInputArea;

    sRenderEngine: RenderEngine;

    // controller
    sInputManager: InputManager;

    // model
    sEditModel: EditModel;

    // eventbus
    sEventBus: EventBus;
    sCacheManager: CacheManager;

    constructor(selector: string,
                containerConfig: EditorContainerConfig = {},
                toolbarConfig: ToolBarConfig = {},
                pageConfig: PageSizeConfig = {}) 
        {
        this.selectorId = selector;

        this.containerConfig = Object.assign(DefaultContainerConfig, containerConfig);
        this.toolbarConfig = toolbarConfig;
        this.pageConfig = pageConfig;

        (Window as any).seedEt = this;
    }

    /**
     * lifecycle
     * beforeinit -> inited -> beforeDestory -> destoryed
     */
    beforeinit() {
        this.seedimp = new seedImp(this);
        this.seedimp.checkBrowserEnv();
    }

    inited() {
        // controller instances
        this.seedimp.inputManagerInit();

        // event bus instance
        this.seedimp.eventBusInit();

        // cache instance
        this.seedimp.cacheManagerInit();

        // view manager instance
        this.seedimp.renderEngineInit();

        // model instances
        this.seedimp.editModelInit();

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



    /**
     * getImp -> fucntion 提供外部调用
     */

    imp() {
         return this.seedimp;
     }
}

export const seeEdt = () => { return (Window as any).seedEt; }