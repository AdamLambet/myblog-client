import { keyCode } from "./constant";

export function isDirectionCode(code: string) {
    return  code === keyCode.ArrowUp || 
            code === keyCode.ArrowDown || 
            code === keyCode.ArrowRight || 
            code === keyCode.ArrowLeft;
}

export function isCodeInputValid(code: string) {
    // mac os 情况下的code
    const macValid = (code === 'KeyA' || code === 'KeyB' || code === 'KeyC'  || code === 'KeyD' ||
                    code === 'KeyE' || code === 'KeyF' || code === 'KeyG'  || code === 'KeyH' ||
                    code === 'KeyI' || code === 'KeyJ' || code === 'KeyK'  || code === 'KeyL' ||
                    code === 'KeyM' || code === 'KeyN' || code === 'KeyO'  || code === 'KeyP' ||
                    code === 'KeyQ' || code === 'KeyR' || code === 'KeyS'  || code === 'KeyT' ||
                    code === 'KeyU' || code === 'KeyV' || code === 'KeyW'  || code === 'KeyX' ||
                    code === 'KeyY' || code === 'KeyZ' 
    );
    return macValid;
}