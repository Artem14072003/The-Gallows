import { ref } from 'vue'
import GameNotification from '@/components/GameNotification.vue'

export const useNotification = () => {
  const notificationRaf = ref<InstanceType<typeof GameNotification> | null>(null)
  const isShowNotification = () => {
    notificationRaf.value?.open()
    return setTimeout(() => notificationRaf.value?.close(), 1000)
  }

  return {
    notificationRaf,
    isShowNotification
  }
}