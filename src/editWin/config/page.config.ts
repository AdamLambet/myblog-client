// editorContainer config
export interface EditorContainerConfig {
    width?: number;
}

export const DefaultContainerConfig = {
    width: 900
}

// edit area config
export interface PageSizeConfig {
    height?: number;
}

export const DefaultPageSize: PageSizeConfig = {
    height: 400
}

// toolbar config
export interface ToolBarConfig {
    height?: number;
}

export const DefaultToolBarConfig: ToolBarConfig = {
    height: 50
}