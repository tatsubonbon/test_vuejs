import { AttackPower } from "./attack";
import type { DefensePower } from "./defense";
import type { Tequnique } from "./tequnique";

export class Damage {
    private attackPower: AttackPower;
    private tequnique: Tequnique;
    private defensePower: DefensePower
    constructor(attackPower: AttackPower, tequnique: Tequnique, defensePower: DefensePower) {
        this.attackPower = attackPower;
        this.tequnique = tequnique;
        this.defensePower = defensePower;
    }

    value(): number {
        return this.attackPower.value() * this.tequnique.power / this.defensePower.power()
    }

    divide(divideValue: number): Damage {
        return new Damage(
            new AttackPower(
                this.attackPower.value() / divideValue),
            this.tequnique,
            this.defensePower
        )
    }
}

