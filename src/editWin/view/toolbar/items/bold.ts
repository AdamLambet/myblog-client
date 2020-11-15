import { ToolBarItem } from "./type";

export class Bold implements ToolBarItem {
    className: string =  'bold';

    getclassName(): string {
        return this.className;
    }
}