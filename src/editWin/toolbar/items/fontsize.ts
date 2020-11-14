import { ToolBarItem } from "./type";

export class FontSize implements ToolBarItem {
    className: string =  'fontsize';

    getclassName(): string {
        return this.className;
    }
}