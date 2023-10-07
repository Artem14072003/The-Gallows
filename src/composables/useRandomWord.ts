import { onMounted, ref } from 'vue'
import { getRandomName } from '@/api/getRandomName'

export const useRandomWord = () => {
  const word = ref('')

  const getRandomWord = async () => {
    try {
      const name: string = await getRandomName()
      word.value = name.toLowerCase()
    } catch (e) {
      console.log(e)
    }
  }

  onMounted(() => getRandomWord())

  return {
    word, getRandomWord
  }
}