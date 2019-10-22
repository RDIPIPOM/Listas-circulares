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
        for (let i = 1; i <= this._totalElements && objectFound === null && this._start != null; i++) {
            if (aux.name === name)
                objectFound = aux;
        }

        return objectFound;
    }

    delete(name) {
        let objectFound = this.query(name);
        if (objectFound != null) {
            if (objectFound != this._start && objectFound != this._end) { //Middle
                objectFound.previous.next = objectFound.next;
                objectFound.next.previous = objectFound.previous;
            } else if (objectFound === this._start) { //Botton
                if (this._totalElements != 1) {
                    this._start.previous.next = this._start.next;
                    this._start.next.previous = this._start.previous;
                    this._start = this._start.next;
                } else {
                    this._start = null;
                }
            } else { //top                    
                this._start.previous = this._end.previous;
                this._end.previous.next = this._start;
                this._end = this._end.previous;
            }
            return true;
        } else
            return false;
    }

    createRoute(initialStation, startHour, endHour) {
        let totalMinutes = (endHour - startHour) * 60;
        let pastMinutes = 0;
        let aux = this.query(initialStation);
        let string = '';
        if (aux != null) {
            do {
                string = string + 'Past Minutes: ' + pastMinutes + aux.toString() + '<br>';
                aux = aux.next;
                pastMinutes += aux.minutes;
            } while (pastMinutes <= totalMinutes);
        }

        return string;
    }
}