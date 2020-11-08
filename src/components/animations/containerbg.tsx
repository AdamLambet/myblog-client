import { reduceEachTrailingCommentRange } from "typescript"
import * as React from 'react';
import './containerbg.scss';

export class LayoutBackground extends React.Component<any, any>  {
    render() {
        return (
            <div className="layout-background">
                <div className="layout-container-bg layout-container-child1"></div>
                <div className="layout-container-bg layout-container-child2"></div>
                <div className="layout-container-bg layout-container-child3"></div>
                <div className="layout-container-bg layout-container-child4"></div>
                <div className="layout-container-bg layout-container-child5"></div>
                <div className="layout-container-bg layout-container-child6"></div>
            </div>
        )
    }
}