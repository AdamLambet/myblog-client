export class seedEditor {
    // dom elment
    editorDiv: HTMLDivElement;

    // toolbar config
    constructor(selector: string) {
        this.checkBrowserEnv()
        this.init(selector);
    }

    /**
     * 查看当前浏览器运行环境
     */
    checkBrowserEnv() {}

    /**
     * 初始化dom和配置
     * @param selector 根结点选择器id
     */
    init (selector: string) {
        this.domInit(selector);
        this.pageSizeInit();
        this.toolBarInit();
    }

    domInit(selector: string) {
        const containerNode: HTMLElement = document.getElementById(selector);
        this.editorDiv = document.createElement('div');
        containerNode.appendChild(this.editorDiv);
    }

    pageSizeInit() {}

    toolBarInit() {}
}