import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useCustomizationStore } from '../common/platform/IdeaShopping/store/customization';
import { useCustomizationStoreJJ } from '../common/platform/JobAndJoy/store/customization';
import { useCustomizationStoreMyGate } from '../common/platform/MyGate/store/customization';


export const usePlatformStore = defineStore('platform', () => {
  const platform = ref('');
  
  const entryStores = {
    ideashopping: useCustomizationStore(), // Crea un'istanza dello store di customization per ideashopping e per JJ
    jobandjoy: useCustomizationStoreJJ(),
    mygate: useCustomizationStoreMyGate()
  } 

  const setPlatform = (choosedPlatform) => {
    platform.value = choosedPlatform;
  }

  return { platform, setPlatform, entryStores };
})
