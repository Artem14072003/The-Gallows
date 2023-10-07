import { computed, ref } from 'vue'
import type {Ref, ComputedRef} from 'vue'

export const useLetters = (word: Ref<string>)=> {
  const letters = ref<string[]>([])
  const correctLetters = computed(() => letters.value.filter(e => word.value.includes(e)))
  const wrongLetters = computed(() => letters.value.filter(e => !word.value.includes(e)))
  const isLose = computed(() => wrongLetters.value.length === 6)
  const isWin = computed(() =>
    [...word.value].every(x => correctLetters.value.includes(x)))
  const resetLetters = () => letters.value = []
  const addLetters = (key: string) => {
    if (/[а-яА-ЯёЁ]/.test(key)) {
      letters.value.push(key.toLowerCase())
    }
  }

  return {
    letters,
    correctLetters,
    wrongLetters,
    isLose,
    isWin,
    addLetters,
    resetLetters
  }
}