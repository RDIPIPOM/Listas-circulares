export default class Product {
    constructor(name, minutes) {
        this._name = name;
        this._minutes = minutes;
        this._next = null;
        this._previous = null;
    }

    get name() {
        return this._name;
    }

    get minutes(){
        return this._minutes;
    }

    get next() {
        return this._next;
    }

    get previous() {
        return this._previous;
    }

    set next(next) {
        this._next = next;
    }

    set previous(previous) {
        this._previous = previous;
    }

    toString() {
        return '////Estación: ' + this._name + '***Minutes: ' + this._minutes + '////';
    }
}