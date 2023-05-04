import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCustomizationStore = defineStore("customization", () => {
  const primaryColor = ref('#1b2032');
  
  const setPrimaryColor = (color) => {
    primaryColor.value = color;
  };

  return { primaryColor, setPrimaryColor };
});

