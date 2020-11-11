import { PageSizeConfig } from "./config/page.config";
import { SeedEditorView } from "./view/editorview";

export class seedEditor {
    // config
    outlineConfig: PageSizeConfig

    // dom elment
    editorDiv: HTMLDivElement;
    selectorId: string;

    // view
    sEditorView: SeedEditorView;

    // toolbar
    constructor(selector: string, outlineConfig: PageSizeConfig = {}) {
        this.checkBrowserEnv()
        this.selectorId = selector;
        this.outlineConfig = outlineConfig;
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
    }

    domInit() {
        const containerNode: HTMLElement = document.getElementById(this.selectorId);
        this.editorDiv = document.createElement('div');
        containerNode.appendChild(this.editorDiv);

        this.sEditorView = new SeedEditorView(this.editorDiv, this.outlineConfig);
    }


    toolBarInit() {}
}