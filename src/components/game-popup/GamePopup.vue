<script setup lang='ts'>

import { ref } from 'vue'
import type { GameStatus } from '@/types/GameStatus'
import type { IGamePopup } from '@/components/game-popup/IGamePopup'

defineProps<IGamePopup>()

const isShow = ref(false)

const gameStatus = ref<GameStatus | null>(null)
const open = (status: GameStatus) => {
  gameStatus.value = status
  isShow.value = true
}

const close = () => {
  isShow.value = false
}

defineExpose({
  open, close
})

const emit = defineEmits<{
  (e: 'restart'): void
}>()

</script>

<template>
  <div v-show='isShow' class='popup-container is-show'>
    <div class='popup'>

      <h2 v-if='gameStatus === "win"'>Поздравляю, вы победили! 😃</h2>
      <template v-else>
         <h2>Вы проиграли. 😕</h2>
         <h3>...имя: {{word}}</h3>
      </template>
      <button @click='emit("restart")'>Сыграть еще раз</button>
    </div>
  </div>

</template>

<style scoped>

</style>