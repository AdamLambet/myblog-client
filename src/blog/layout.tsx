import * as React from 'react';
import { Row, Col } from 'antd';
import './layout.scss';
import { LayoutBackground } from '../components/animations/containerbg';
import { SlideBar } from '../components/slidebar/slidebar';
import { TabBar } from '../components/tabbar/tabbar';

export class LayoutManager extends React.Component<any, any> {
    render() {
        return (
           <div className="layout-container">
               <LayoutBackground />
                <Row className="layout-row">
                    {/* <Col flex="240px">
                       <SlideBar />
                    </Col> */}
                    <Col flex="auto">
                        <div className="main-content"></div>
                    </Col>
                    <Col flex="60px">
                        <TabBar />
                    </Col>
                </Row>
           </div>
        )
    }
}