import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCustomizationStore = defineStore("customization", () => {
  const primaryColor = ref('#101941');
  const secondaryColor = ref('#101941');
  const textCustom = ref('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
  const titleCustom = ref('Benvenuto in Ranstad Welfare Card')
  const subTitleCustom = ref('Oltre il semplice Bonus')
  const logo = ref('/src/assets/imgs/logo.png')
  
  const setPrimaryColor = (color) => {
    primaryColor.value = color;
  };

  const setSecondaryColor = (color) => {
    secondaryColor.value = color;
  };

  const setTextCustom = (text, type) => {
    if (type in useCustomizationStore()) {
      useCustomizationStore()[type] = text;
    } else {
      console.error(`Property ${type} does not exist in the store`);
    }

  }
  const setImg = (logoSrc) => {
    logo.value = logoSrc
  }

  return { 
    primaryColor,
    secondaryColor,
    textCustom,
    titleCustom,
    subTitleCustom,
    logo,
    setPrimaryColor,
    setSecondaryColor,
    setTextCustom,
    setImg
  };
});

