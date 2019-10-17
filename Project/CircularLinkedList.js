export default class CircularLinkedList {
    constructor() {
        this._start = null;
        this._totalElements = 0;
    }

    add(node, position) {
        if (position <= this._totalElements + 1) {
            if (this._start != null) {
                if (position != 1) {

                } else {
                    node.next = this._start;
                    this._start = node;
                }
            } else
                this._start = node;
            this._totalElements++;
            return true;
        } else
            return false;
    }

    query(code) {
        let aux = this._start;
        let objectFound = null;
        while (aux != null && objectFound === null) {
            if (aux.code === code)
                objectFound = aux;
            aux = aux.next;
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

    report() {
        let aux = this._start;
        let string = '';
        while (aux != null) {
            string = string + '<br>' + aux.toString();
            aux = aux.next;
        }
        return string;
    }
}