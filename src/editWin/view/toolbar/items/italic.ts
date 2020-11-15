import { ToolBarItem } from "./type";

export class Italic implements ToolBarItem {
    className: string =  'italic';

    getclassName(): string {
        return this.className;
    }
}