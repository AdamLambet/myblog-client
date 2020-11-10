import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { Frame } from './src/frameWork/frame';

class Myblog {
    aFrame: Frame;
    constructor() {
        this.aFrame = new Frame();
    }
}

ReactDOM.render(<App />, document.getElementById('BlogFrame'));

