import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCustomizationStoreMyGate = defineStore("customizationMyGate", () => {
  const primaryColor = ref('#0d6cf8');
  const bgImg = ref('src/assets/imgs/bgMyGate.jpg')

  const logo = ref('src/assets/imgs/logoMyGate.png')
  
  const setPrimaryColor = (color) => {
    primaryColor.value = color;
    bgImg.value = ''
  };


 
  const setImg = (logoSrc) => { 
    logo.value = logoSrc
  }

  return { 
    primaryColor,
    logo,
    bgImg,
    setPrimaryColor,
    setImg
  };
});

