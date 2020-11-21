import { ContentAttrs } from "./attribute";

/**
 * 段落中内容描速类
 */
export class ContentNode {
    sTextString: string = '';
	sAttrs: ContentAttrs;

    constructor(sTextString: string = '', sAttrs: ContentAttrs = null) {
        this.initContentNode(sTextString, sAttrs);
    }

    initContentNode(sTextString: string, sAttrs: ContentAttrs) {
        this.sTextString = sTextString;
        this.sAttrs = sAttrs;
    }

    getText(): string {
        return this.sTextString;
    }

    setText(text: string) {
        this.sTextString = text;
    }

    getAttrs(): ContentAttrs {
        return this.sAttrs;
    }
}