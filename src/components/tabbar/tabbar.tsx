import * as React from 'react';
import './tabbar.scss';
import {
    EditTwoTone,
    FolderTwoTone,
    HomeTwoTone, IdcardTwoTone, MailTwoTone
  } from '@ant-design/icons';
import { setTwoToneColor } from '@ant-design/icons';
setTwoToneColor('#3B5998');

const iconStyleConfig = { 
    fontSize: '22px' ,
    padding: '12px',
    background: '#fff',
    borderRadius: '50%'
};
/**
 * 个人信息主页
 * 教育经历
 * 工作经历
 * 博客
 * 联系方式
 */
export class TabBar extends React.Component<any> {
    render() {
        return (
            <ul className="tab-bar">
                <li>
                    <HomeTwoTone style={iconStyleConfig} />
                </li>
                <li>
                    <IdcardTwoTone style={iconStyleConfig} />
                </li>
                <li>
                    <FolderTwoTone style={iconStyleConfig} />
                </li>
                <li>
                    <EditTwoTone style={iconStyleConfig} />
                </li>
                <li>
                    <MailTwoTone style={iconStyleConfig} />
                </li>
            </ul>
        )
    }
}