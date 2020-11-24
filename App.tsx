import { LayoutManager } from './src/frameWork/layout';
import * as React from 'react';
import 'antd/dist/antd.css'; 
import { Loading } from './src/components/loading/loading';

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000)
    }

    render() {
        if (this.state.loading) {
            return (
                <Loading></Loading>
            )
        }
        return (
            <LayoutManager></LayoutManager>
        )
    }
}