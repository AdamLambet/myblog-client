import { seedEditor, seeEdt } from "../seedModule";
import { isCodeInputValid, isDirectionCode } from "../utils/commonUtil";
import { eventNotifyType } from "../utils/constant";
import { EventBus } from "../utils/eventBus";
    const eventsType = [
        'input',
        'keyup',
        'keydown',
    ]


/**
 * 介绍：
 * InputManager 用户行为管理类 用户所有在编辑区域产生的事件 都会由该类统一处理
 */
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
                    hookCallBasks.push(this.keyDownHandler.bind(this));
                    this.eventHook.set('keydown', hookCallBasks);
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
     inputHandler(event: InputEvent) {
         console.log(event);
     }
     
     /**
      * 按键抬起行为管理
      */

      /**
       * 按键按下行为管理
       */
      keyDownHandler(event: KeyboardEvent) {
          const keyCode: string = event.code;
          const keyValue: string = event.key;
          const eventBus: EventBus = this.sEditor.imp().getEventBus();
          if (!isDirectionCode(keyCode)) { // 除了上下左右按键用开调整光标位置 其他情况都会阻止默认行为
            event.preventDefault();
            event.stopPropagation();
          }

         if (isCodeInputValid(keyCode)) {
            const data = keyValue;
            const args = { data };
            eventBus.dispatchEvent(eventNotifyType.input, args);
         }
          console.log(event);
      } 
 }