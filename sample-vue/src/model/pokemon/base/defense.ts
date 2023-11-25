export class DefensePower {
    private _power: number;

    constructor(power: number) {
        this._power = power
    }

    power(): number {
        return this._power
    }
}