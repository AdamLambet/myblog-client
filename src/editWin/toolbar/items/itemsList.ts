import { Bold } from './bold';
import { FontSize } from './fontsize';
import { Italic } from './italic';
import { Strikethrough } from './strikethrough';
import { ToolBarItem } from './type';
import { Underline } from './underline';

export const TItemNameToClass  = {
    'bold': Bold,
    'italic': Italic,
    'underline': Underline,
    'strikethrough': Strikethrough,
    'fontsize': FontSize,
}

export class TitemList {

    itemconfig: string[];
    itemListNode: HTMLUListElement;
    nameInstanceMap: Map<string, ToolBarItem> = new Map();
    nameItemDomMap: Map<string, HTMLLIElement> = new Map();

    constructor(itemconfig: string[]) {
        this.itemconfig = itemconfig;
        this.initTDomTree();
        this.initTEventManager();
    }

    getitemListNode(): HTMLUListElement {
        return this.itemListNode;
    }

    initTDomTree() {
        if (this.itemconfig.length === 0)  {  console.warn('no toolbar item exist'); return; }
        this.itemListNode = document.createElement('ul');
        this.itemListNode.id = 'item-list-node';
        this.itemconfig.forEach(item => {
            const cItemInstance: ToolBarItem = new TItemNameToClass[item]();
            const cItemDom: HTMLLIElement = document.createElement('li');
            this.nameInstanceMap.set(item, cItemInstance);
            this.nameItemDomMap.set(item, cItemDom);
            this.itemListNode.appendChild(cItemDom);

            // icon span
            const iconNode: HTMLSpanElement = document.createElement('span');
            iconNode.classList.add(`seededitor-icon-${cItemInstance.getclassName()}`); // ie10/lowerFF need pollify
            cItemDom.appendChild(iconNode);

            // drop down
        })
    }

    initTEventManager() {}
}