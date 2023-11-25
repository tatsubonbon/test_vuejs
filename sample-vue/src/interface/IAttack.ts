import type { Damage } from "@/model/pokemon/base/damage";

interface IAttack {
    attack(damage: Damage): Generator<Damage>;
}