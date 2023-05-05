<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import type { Abc, Def } from '@sample/core'

const abc: Abc = {
  aaa: 'a',
  bbb: 'b',
  ccc: 'c'
}
const def: Def = {
  abc: abc,
  ddd: 1,
  eee: 2,
  fff: 3
}
console.log(abc)
console.log(def)
</script>

<template>
  <main>
    <CounterComponent />
    <CounterGreenComponent />
    <HelloWorld />
    <TheWelcome />
  </main>
</template>
