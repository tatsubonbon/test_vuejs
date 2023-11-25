<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { BattleField } from './model/battle/field';
import { Garura } from './model/pokemon/garura';
import { Pikachu } from './model/pokemon/pikachu';

const router = useRouter();

const pikachu = new Pikachu()
const garura = new Garura();
const field = new BattleField(pikachu,garura)

const tequniques = ref(pikachu.tequniques)
const myPokemonHP = ref(pikachu.hp.current)
const opponentPokemonHP = ref(garura.hp.current)

function selectAttack(index: number) {
  field.battle(index)
  opponentPokemonHP.value = garura.hp.current
  myPokemonHP.value = pikachu.hp.current
}

</script>

<template>
  <header>
    <!-- <button v-on:click="executeRequest()">testButton</button> -->
    <!-- <p v-bind:style="testStyle">test</p> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
    <h1>{{ garura.name }}</h1>
    <h2>{{ opponentPokemonHP }}</h2>

    <hr>

    <h1>{{ pikachu.name }}</h1>
    <h2>{{ myPokemonHP }}</h2>
    <li v-for="(tequnique, index) in tequniques" :key="tequnique.name">
      <button @click="selectAttack(index)">{{ tequnique.name }}</button>
    </li>

  </header>

  <RouterView />
</template>
