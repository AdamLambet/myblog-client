import { DefaultContainerConfig, EditorContainerConfig, PageSizeConfig, ToolBarConfig } from "./config/page.config";
import { SeedEditorView } from "./view/editorview";
import { ToolBar } from "./toolbar/toolbar";

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

    // view
    sEditorView: SeedEditorView;
    sToolBarView: ToolBar;

    constructor(selector: string, containerConfig: EditorContainerConfig = {},  toolbarConfig: ToolBarConfig = {}, pageConfig: PageSizeConfig = {}) {
        this.checkBrowserEnv()

        this.selectorId = selector;

        this.containerConfig = Object.assign(DefaultContainerConfig, containerConfig);
        this.toolbarConfig = toolbarConfig;
        this.pageConfig = pageConfig;
    }

    /**
     * 查看当前浏览器运行环境
     */
    checkBrowserEnv() {}

    /**
     * 初始化dom和配置
     * @param selector 根结点选择器id
     */
    init () {
        this.domInit();
        this.toolBarInit();
        this.editPage();
    }

    domInit() {
        this.rootNode = document.getElementById(this.selectorId);
        this.editorContainer = document.createElement('div');
        this.rootNode.appendChild(this.editorContainer);
        this.editorContainer.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.15)';
        this.editorContainer.style.border = '1px solid #c9d8db';
        this.editorContainer.style.margin = '0 auto';
        this.editorContainer.style.width = `${this.containerConfig.width}px`;
    }

    toolBarInit() {
        this.toolBarDiv = document.createElement('div');
        this.editorContainer.appendChild(this.toolBarDiv);
        this.sToolBarView = new ToolBar(this.toolBarDiv, this.toolbarConfig);
    }

    editPage() {
        this.editorDiv = document.createElement('div');
        this.editorContainer.appendChild(this.editorDiv);
        this.sEditorView = new SeedEditorView(this.editorDiv, this.pageConfig);
    }
}