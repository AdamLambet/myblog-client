import { LayoutManager } from './src/frameWork/layout';
import * as React from 'react';
import 'antd/dist/antd.css'; 

export class App extends React.Component<any> {
    constructor() {
        super()
    }
    render() {
        return (
            <LayoutManager></LayoutManager>
        )
    }
}