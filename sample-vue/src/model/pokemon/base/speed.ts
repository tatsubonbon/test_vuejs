export class Speed {
    private _speed: number;
    constructor(speed: number) {
        this._speed = speed
    }

    value(): number {
        return this._speed
    }
}