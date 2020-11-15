import { PageSizeConfig, DefaultPageSize } from "../../config/page.config";

export class SeedEditorView {

    eElement: HTMLDivElement;
    pOutlineStyle: PageSizeConfig;

    constructor(eElement: HTMLDivElement, pageConfig: PageSizeConfig) {
        this.eElement = eElement;
        this.pOutlineStyle = Object.assign(DefaultPageSize, pageConfig);
        this.initPageSize()
    }

    initPageSize() {
        const uuid = '1'; // todo for multi instance
        this.eElement.id = `sEditor${uuid}`;
        this.eElement.setAttribute('contenteditable', 'true');
        this.eElement.style.outline = 'none';
        this.eElement.style.padding = '22px 15px 40px';
        this.eElement.style.boxSizing = 'border-box';
        this.eElement.style.height = `${ this.pOutlineStyle.height}px`;
        this.eElement.style.width = `100%`;
    }
}