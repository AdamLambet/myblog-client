export class ProxyInputArea {
    pElement: HTMLTextAreaElement;

    constructor(pElement: HTMLTextAreaElement) {
        this.pElement = pElement;
        this.initInputDom();
    }

    initInputDom() {
        this.pElement.style.zIndex = '-100';
    }
}