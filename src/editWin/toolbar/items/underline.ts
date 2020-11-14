import { ToolBarItem } from "./type";

export class Underline implements ToolBarItem {
    className: string =  'underline';

    getclassName(): string {
        return this.className;
    }
}