import { seedEditor, seeEdt } from "../seedModule";
import { eventNotifyType } from "../utils/constant";
import { EventBus } from "../utils/eventBus";

/**
 * 介绍：
 * InputManager 用户行为管理类 用户所有在编辑区域产生的事件 都会由该类统一处理
 */
const eventsType = [
    'input',
    'keyup',
    'keydown',
]

const enum inputType {
    'insertText',
    'deleteContentBackward',
}

 export class InputManager {
     sEditor: seedEditor = seeEdt();
     editorDiv: HTMLDivElement;
     eventHook: Map<string, Function[]> = new Map();

     constructor(editorDiv: HTMLDivElement) {
        this.editorDiv = editorDiv;
        this.eventHookInit();
        this.registerEvents();
     }

     eventHookInit() {
        eventsType.forEach(item => {
            let hookCallBasks = [];
            switch(item) {
                case 'input':
                    hookCallBasks.push(this.inputHandler.bind(this));
                    this.eventHook.set('input', hookCallBasks);
                    break;
                case 'keyup':
                    break;
                case 'keydown':
                    break;
                default:
                    break;
            }
        })
     }

     registerEvents() {
        eventsType.forEach(eventName => {
            this.editorDiv.addEventListener(eventName, this.doEvents.bind(this, eventName));
        }) 
     }

     doEvents(eventName: string, event: Event) {
         const callBackArray = this.eventHook.get(eventName);
         callBackArray && callBackArray.forEach(func => {
            func(event);
         })
     }

     releaseEvents() {}

    /**
     * 
     * @param event 用户输入行为管理
     */
     inputHandler(event: any) {
        const eventBus: EventBus = this.sEditor.sEventBus;
        switch(event.inputType) {
            case inputType.insertText:
                const data = event.data;
                const args = { data };
                eventBus.dispatchEvent(eventNotifyType.input, args);
                break;
            case inputType.deleteContentBackward:
                eventBus.dispatchEvent(eventNotifyType.delete);
                break;
            default:
                break;
        }
        console.log(event);
     }
 }