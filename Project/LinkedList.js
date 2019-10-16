//////Observaciones/////
/*
1. Las variables deberían guardar solo un tipo de dato ya que si lo intentas migrar a otro lenguege es probable que truene
2. Es posible usar recursividad en varias funciones, sin embargo, es menos eficiente que el método actual
*/
export default class LinkedList {
    constructor() {
        this._start = null;
    }

    add(node) {      
        if (this.query(node.code) === null) {
            if (this._start != null) {
                let aux = this._start;
                while (aux != null) {
                    if (aux.code > node.code) {
                        aux.previous.next = node;
                        node.previous = aux.previous;
                        node.next = aux;
                        break;
                    }else{
                        aux = aux.next;
                    }
                }
            } else
                this._start = node;
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

    reverseReport() {
        let aux = this._start;
        let string = '';
        while (aux != null) {
            string = aux.toString() + '<br>' + string;
            aux = aux.next;
        }
        return '<br>' + string;
    }

    _isAValidPosition(position) {
        if (position >= 0) {
            if (position <= this._totalNodes() + 1)
                return true;
            else
                return false;
        } else
            return false;
    }

    _totalNodes() {
        let totalNodes = 0;
        let aux = this._start;
        while (aux != null) {
            totalNodes++;
            aux = aux.next;
        }

        return totalNodes;
    }
}