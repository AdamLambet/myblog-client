import * as React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './loading.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 60 }} spin />;

export class Loading extends React.Component<any> {
    render() {
        return (
            <div className="loading-container">
                <Spin tip="Loading..." />
            </div>
        );
    }
}