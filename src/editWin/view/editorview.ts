import { PageSizeConfig, DefaultPageSize } from "../config/page.config";

export class SeedEditorView {

    eElement: HTMLDivElement;
    pOutlineStyle: PageSizeConfig;

    constructor(eElement: HTMLDivElement, outlineConfig: PageSizeConfig) {
        this.eElement = eElement;
        this.pOutlineStyle = Object.assign(DefaultPageSize, outlineConfig);
        this.initPageSize()
    }

    initPageSize() {
        const uuid = '1'; // todo for multi instance
        this.eElement.id = `sEditor${uuid}`;
        this.eElement.setAttribute('contenteditable', 'true');
        this.eElement.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.15)';
        this.eElement.style.border = '0 1px 1px 1px solid #c9d8db';
        this.eElement.style.outline = 'none';
        this.eElement.style.margin = '150px auto';
        this.eElement.style.padding = '22px 15px 40px';
        this.eElement.style.height = `${ this.pOutlineStyle.height}px`;
        this.eElement.style.width = `${ this.pOutlineStyle.width}px`;
    }
}