import { Damage } from "../pokemon/base/damage";
import type { Pokemon } from "../pokemon/base/pokemon";

export class BattleField {
    private myPokemon: Pokemon;
    private opponent: Pokemon;
    constructor(myPokemon: Pokemon, opponent: Pokemon) {
        this.myPokemon = myPokemon;
        this.opponent = opponent;
    }

    attackToOpponent(tequniqueIndex: number): void {
        const damage = new Damage(
            this.myPokemon.attackPower,
            this.myPokemon.tequniques[tequniqueIndex],
            this.opponent.defensePower
        )
        for (const value of this.myPokemon.attack(damage)) {
            this.opponent.damaged(value)
        }
    }

    attackByOpponent(): void {
        const tequniques = this.opponent.tequniques
        const selectTequnique = tequniques[Math.floor(Math.random() * tequniques.length)]
        const damage = new Damage(
            this.opponent.attackPower,
            selectTequnique,
            this.myPokemon.defensePower
        )
        for (const value of this.opponent.attack(damage)) {
            console.log(value.value())
            this.myPokemon.damaged(value)
        }
    }

    battle(tequniqueIndex: number): void {
        if (this.myPokemon.speed.value > this.opponent.speed.value) {
            this.attackToOpponent(tequniqueIndex);
            this.attackByOpponent();
        } else if (this.myPokemon.speed.value == this.opponent.speed.value) {
            if (Math.random() > 0.5) {
                this.attackToOpponent(tequniqueIndex);
                this.attackByOpponent();
            } else {
                this.attackByOpponent();
                this.attackToOpponent(tequniqueIndex);
            }
        } else {
            this.attackByOpponent();
            this.attackToOpponent(tequniqueIndex);
        }
    }
}