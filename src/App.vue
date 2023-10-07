<script setup lang='ts'>

import GameHeader from '@/components/GameHeader.vue'
import GameFigure from '@/components/game-figure/GameFigure.vue'
import GameWord from '@/components/game-word/GameWord.vue'
import GamePopup from '@/components/game-popup/GamePopup.vue'
import GameNotification from '@/components/GameNotification.vue'
import { computed, onMounted, ref, watch } from 'vue'
import GameWrongLetters from '@/components/game-wrong-letters/GameWrongLetters.vue'
import { useRandomWord } from '@/composables/useRandomWord'
import { useLetters } from '@/composables/useLetters'
import { useNotification } from '@/composables/useNotification'

const { word, getRandomWord } = useRandomWord()

const {
  letters,
  correctLetters,
  wrongLetters,
  isLose,
  isWin,
  addLetters,
  resetLetters
} = useLetters(word)

const { notificationRaf, isShowNotification } = useNotification()

const restart = () => {
  getRandomWord()
  resetLetters()

  popupRef.value?.close()
}

const popupRef = ref<InstanceType<typeof GamePopup> | null>(null)
ya
watch(wrongLetters, () => {
  if (isLose.value) {
    popupRef.value?.open('lose')
  }
})

watch(correctLetters, () => {
  if (isWin.value) {
    popupRef.value?.open('win')
  }
})

window.addEventListener('keydown', ({ key }) => {

  if (isWin.value || isLose.value) return
  if (letters.value.includes(key)) {
    return isShowNotification()
  }
  addLetters(key)
})

</script>

<template>
  <div id='app'>
    <GameHeader />

    <div class='game-container'>
      <GameFigure :wrong-letters-count='wrongLetters.length' />

      <GameWrongLetters :wrong-letters='wrongLetters' />

      <GameWord :word='word' :correct-letters='correctLetters' />
    </div>

    <!-- Container for final message -->
    <GamePopup :word='word' ref='popupRef' @restart='restart' />
    <!-- Notification -->
    <GameNotification ref='notificationRaf' />
  </div>
</template>

<style scoped>

</style>
