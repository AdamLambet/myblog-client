import * as React from 'react';
import './portal.scss';
import githubIcon from './icons/github.png';
import csdnIcon from './icons/csdn.png';
import seed from './icons/seedling.png';
import email from './icons/email.png';

export class Portal extends React.Component<any> {
    constructor (props: any) {
        super(props)
    }
    
    render() {
        return (
            <div className="portal-frame">
                <div className="portal-container">
                    <div className="box">
                        <div className="img">
                            <a href="https://github.com/AdamLambet">
                                <img src={ githubIcon } />
                            </a>
                        </div>
                        <p>Github</p>
                    </div>
                    <div className="box">
                        <div className="img">
                            <a href="https://blog.csdn.net/weixin_44153194">
                                <img src={ csdnIcon } />
                            </a>
                        </div>
                        <p>CSDN</p>
                    </div>
                    <div className="box">
                        <div className="img">
                            <a href="">
                                <img src={ seed } />
                            </a>
                        </div>
                        <p>SeedEditor</p>
                    </div>
                    <div className="box">
                        <div className="img">
                            <a href="">
                                <img src={ email } />
                            </a>
                        </div>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        )
    }
}