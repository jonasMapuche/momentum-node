class Momentum {

    _name: string;
    _malware: object;

    constructor(name: string, malware: object) {
        this._name = name;
        this._malware = malware;
    }

    getName() {
        return this._name;
    }

    getMalware() {
        return this._malware;
    }
}

export const momentum = Momentum;