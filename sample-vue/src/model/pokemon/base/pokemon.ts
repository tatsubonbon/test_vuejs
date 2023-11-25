import type { IAttack } from "../../../interface";
import { AttackPower } from "./attack";
import { Damage } from "./damage";
import { DefensePower } from "./defense";
import { HP } from "./hp";
import { Speed } from "./speed";
import { Tequnique } from "./tequnique";

export class Pokemon {
    private _name: string;
    private _attribute: Array<Attribute>;
    private _hp: HP;
    private _speed: Speed;
    private _attackPower: AttackPower;
    private _defensePower: DefensePower;
    private _tequniques: Array<Tequnique>;
    private _attack: IAttack;

    constructor(
        name: string,
        attribute: Array<Attribute>,
        hp: HP,
        speed: Speed,
        attackPower: AttackPower,
        defensePower: DefensePower,
        tequniques: Array<Tequnique>,
        attack: IAttack
    ) {
        this._name = name;
        this._attribute = attribute;
        this._hp = hp;
        this._speed = speed;
        this._attackPower = attackPower;
        this._defensePower = defensePower;
        this._tequniques = tequniques;
        this._attack = attack;
    }

    get name(): string {
        return this._name;
    }
    get attribute(): Attribute[] {
        return this._attribute;
    }
    get hp(): HP {
        return this._hp;
    }
    get speed(): Speed {
        return this._speed
    }
    get attackPower(): AttackPower {
        return this._attackPower;
    }
    get defensePower(): DefensePower {
        return this._defensePower;
    }
    get tequniques(): Tequnique[] {
        return this._tequniques;
    }
    get attack(): IAttack {
        return this._attack;
    }

    damaged(damage: Damage): void {
        this._hp = this._hp.damaged(damage)
    }
}