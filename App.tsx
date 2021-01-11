import * as React from 'react';
import 'antd/dist/antd.css'; 
import { Portal } from './src/portal/portal';

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <Portal></Portal>
        )
    }
}