import { ToolBarItem } from "./type";

export class Bold implements ToolBarItem {
    iconName: 'bold.svg';

    getIconName(): string {
        return this.iconName;
    }
}