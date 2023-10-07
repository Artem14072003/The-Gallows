<script setup lang='ts'>

import type { GameWrongLetters } from '@/components/game-wrong-letters/GameWrongLetters'

defineProps<GameWrongLetters>()
</script>

<template>
  <div v-if='wrongLetters.length' class='wrong-letters-container'>
    <div class='wrong-letters'>
      <p>Ошибки</p>
      <span v-for='(wrong, idx) in wrongLetters' :key='wrong+idx'>{{wrong}}, </span>
    </div>
  </div>
</template>

<style scoped>

</style>