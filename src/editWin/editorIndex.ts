import { seedEditor } from './seedModule';

const editor = new seedEditor('blog-edit-container');
editor.init();

const win: any = Window;
win.editor = editor;