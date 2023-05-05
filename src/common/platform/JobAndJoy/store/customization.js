import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCustomizationStore = defineStore("customization", () => {
  const primaryColor = ref('#0d6cf8');
  const secondaryColor = ref('#101941');

  const logo = ref('src/assets/imgs/logoJJ.png')
  
  const setPrimaryColor = (color) => {
    primaryColor.value = color;
  };

  const setSecondaryColor = (color) => {
    secondaryColor.value = color;
  };

 
  const setImg = (logoSrc) => {
    logo.value = logoSrc
  }

  return { 
    primaryColor,
    secondaryColor,
    logo,
    setPrimaryColor,
    setSecondaryColor,
    setImg
  };
});

