import { ToolBarItem } from "./type";

export class Strikethrough implements ToolBarItem {
    className: string =  'strikethrough';

    getclassName(): string {
        return this.className;
    }
}