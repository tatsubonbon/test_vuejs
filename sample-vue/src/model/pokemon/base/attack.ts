import type { IAttack } from "../../../interface";
import { Damage } from "./damage";

export class AttackPower {
    private power: number;

    constructor(power: number) {
        this.power = power
    }

    value(): number {
        return this.power
    }
}

export class Attack implements IAttack {
    *attack(damage: Damage): Generator<Damage> {
        yield damage
    }
}

export class DoubleAttack implements IAttack {
    *attack(damage: Damage): Generator<Damage> {
        yield damage
        yield damage.divide(5)
    }
}