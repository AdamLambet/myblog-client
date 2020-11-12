import { ToolBarItem } from "./type";

export class Italic implements ToolBarItem {
    iconName: 'italic.svg';

    getIconName(): string {
        return this.iconName;
    }
}