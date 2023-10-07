<script setup lang='ts'>

import type { IWordComponent } from '@/components/game-word/GameWord'

defineProps<IWordComponent>()
</script>

<template>
  <div class='word'>
    <span v-for='(letter, idx) in word' :key='idx' class='letter'>
      {{correctLetters.includes(letter) ? letter : ''}}
    </span>
  </div>
</template>

<style scoped>

</style>