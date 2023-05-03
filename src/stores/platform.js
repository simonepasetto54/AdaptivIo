import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlatformStore = defineStore('platform', () => {
  const platform = ref('')
  const setPlatform = (choosedPlatform) => {
    platform.value = choosedPlatform
  }

  return { platform, setPlatform }
})
