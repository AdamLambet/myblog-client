import { DefaultToolBarConfig, ToolBarConfig } from "../config/page.config";
import { TitemList } from "./items/itemsList";
import { tItemsConfig } from "./items/type";

export class ToolBar {
    tElement: HTMLDivElement;
    aToolBarStyle: ToolBarConfig;

    constructor(tElement: HTMLDivElement, toolbarConfig: ToolBarConfig) {
        this.tElement = tElement;
        this.aToolBarStyle = Object.assign(DefaultToolBarConfig, toolbarConfig);
        this.toolBarInit();
        this.toolBarItemInit();
    }

    toolBarInit() {
        const uuid = '1'; // todo for multi instance
        this.tElement.id = `sToolBar${uuid}`;
        this.tElement.style.height = `${ this.aToolBarStyle.height}px`;
        this.tElement.style.width = `100%`;
        this.tElement.style.borderBottom = '1px solid #eeeeee';
    }

    toolBarItemInit() {
        const tItemConfig = Object.assign(tItemsConfig, {}); // customitem todo
        const tList = new TitemList(tItemConfig);
        this.tElement.appendChild(tList.getitemListNode());
    }
}