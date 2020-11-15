/**
 * 介绍：
 * InputManager 用户行为管理类 用户所有在编辑区域产生的事件 都会由该类统一处理
 */
const eventsType = [
    'input',
    'keyup',
    'keydown',
]

 export class InputManager {
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
     inputHandler(event: Event) {
        console.log(event);
     }
 }