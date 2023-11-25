import { Attack, AttackPower } from "./base/attack";
import { DefensePower } from "./base/defense";
import { HP } from "./base/hp";
import { Pokemon } from "./base/pokemon";
import { Speed } from "./base/speed";
import { Tequnique } from "./base/tequnique";

export class Pikachu extends Pokemon {
    constructor() {
        super(
            "ピカチュウ",
            ["DENKI"],
            new HP(100, 100),
            new Speed(100),
            new AttackPower(30),
            new DefensePower(30),
            [
                new Tequnique("デンコウせっか", 30, "NORMAL"),
                new Tequnique("10万ボルト", 40, "DENKI"),
            ],
            new Attack()
        );
    }
}