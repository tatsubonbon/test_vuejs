import { AttackPower, DoubleAttack } from "./base/attack";
import { DefensePower } from "./base/defense";
import { HP } from "./base/hp";
import { Pokemon } from "./base/pokemon";
import { Speed } from "./base/speed";
import { Tequnique } from "./base/tequnique";

export class Garura extends Pokemon {
    constructor() {
        super(
            "ガルーラ",
            ["NORMAL"],
            new HP(150, 100),
            new Speed(80),
            new AttackPower(40),
            new DefensePower(30),
            [
                new Tequnique("体当たり", 30, "NORMAL"),
                new Tequnique("test", 20, "NORMAL"),
                new Tequnique("test2", 20, "NORMAL"),
                new Tequnique("test3", 20, "NORMAL"),
            ],
            new DoubleAttack()
        );
    }
}