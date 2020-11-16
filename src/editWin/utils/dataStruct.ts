export class Stack {
    items: any[];
    constructor(elems: any[]) {
        this.items = elems;
    }

    Push(item: any){
        this.items.push(item);
    }

    Pop(){
        return this.items.pop();
    }

    Peek() {
        return this.items[length - 1];
    }

    IsEmpty(){
        return this.items.length === 0;
    }

    Size() {
        return this.items.length;
    }

    Clear(){
        this.items = [];
    }
}


export class Queen {
    items: any[];
    constructor(elems: any[]) {
        this.items = elems;
    }

    Enqueen(item: any) {
        this.items.push(item)
    }

    Dequeen() {
        return this.items.shift();
    }

    Front() {
        return this.items[0];
    }

    IsEmpty() {
        return this.items.length === 0;
    }

    Size() {
        return this.items.length;
    }

    Clear() {
        this.items = [];
    }
}
