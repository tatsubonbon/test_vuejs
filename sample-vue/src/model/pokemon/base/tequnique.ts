
export class Tequnique {
    private _name: string;
    private _power: number;
    private _attribute: Attribute;

    constructor(name: string, power: number, attribute: Attribute) {
        this._name = name;
        this._power = power;
        this._attribute = attribute;
    }

    get name(): string {
        return this._name
    }

    get power(): number {
        return this._power
    }

    get attribute(): Attribute {
        return this._attribute
    }
}


