import type { Damage } from "./damage";

export class HP {
    private _current: number;
    private max: number;

    constructor(current_hp: number, max_hp: number) {
        this._current = current_hp
        this.max = max_hp
    }

    get current(): number {
        return this._current;
    }

    heal(heal: number): HP {
        const hp = this._current + heal
        if (hp > this.max) {
            return new HP(this.max, this.max)
        }
        return new HP(hp, this.max)
    }

    damaged(damage: Damage): HP {
        const hp = this._current - damage.value()
        if (hp <= 0) {
            return new HP(0, this.max)
        }
        return new HP(hp, this.max)
    }
}