export default class CircularLinkedList {
    constructor() {
        this._start = null;
        this._end = null;
        this._totalElements = 0;
    }

    add(node, position) {
        if (position >= 0 && position <= this._totalElements + 1 && this.query(name) === null) {
            if (this._start != null) {
                if (position != 1 && position != 0 && position != this._totalElements + 1) {//Middle
                    let aux = this._start;
                    for (let i = 1; i <= position; i++)
                        aux = aux.next;
                    aux.previous.next = node;
                    node.previous = aux.previous;
                    node.next = aux;
                    aux.previous = node;
                } else if (position === 0 || position === this._totalElements) {//Top
                    this._end.next = node;
                    node.previous = this._end;
                    this._end = node;
                    this._end.next = this._start;
                } else {//Bottom
                    node.next = this._start;
                    node.previous = this._end;
                    this._start.previous = node;
                    this._start = node;
                }
            } else {
                node.previous = node;
                node.next = node;
                this._start = node;
                this._end = node;
            }
            this._totalElements++;
            return true;
        } else
            return false;
    }

    query(name) {
        let aux = this._start;
        let objectFound = null;
        for (let i = 1; i <= this._totalElements && objectFound === null; i++) {
            if(aux.name === name)
                objectFound = aux;
        }

        return objectFound;
    }

    delete(code) {
        let objectFound = this.query(code);
        if (objectFound != null) {
            if (objectFound.next != null && objectFound.previous != null) { //Middle
                objectFound.previous.next = objectFound.next;
                objectFound.next.previous = objectFound.previous;
            } else if (objectFound.previous === null) { //Botton
                this._start = objectFound.next;
                objectFound.next.previous = null;
            } else { //top                    
                objectFound.previous.next = null;
            }
            return true;
        } else
            return false;
    }

    createRoute() {
        let aux = this._start;
        let string = '';
        for (let i = 1; i <= this._totalElements; i++) {
            string = string + '<br>' + aux.toString();
            aux = aux.next;
        }
        return string;
    }
}