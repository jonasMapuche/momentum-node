class Exercise {

    _chain: number;
    _list: object;
    _resistance: object;

    constructor(chain: number, list: object, resistance: object) {
        this._chain = chain;
        this._list = list;
        this._resistance = resistance;
    }

    getChain() {
        return this._chain;
    }

    getList() {
        return this._list;
    }

    getResistence() {
        return this._resistance;
    }
}

export const exercise = Exercise;