import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCustomizationStore = defineStore("customization", () => {
  const primaryColor = ref('#101941');
  const secondaryColor = ref('#101941');
  const textCustom = ref('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
  
  const setPrimaryColor = (color) => {
    primaryColor.value = color;
  };

  const setSecondaryColor = (color) => {
    secondaryColor.value = color;
  };

  const setTextCustom = (text) => {
    textCustom.value = text
  }

  return { primaryColor,secondaryColor,textCustom, setPrimaryColor, setSecondaryColor,setTextCustom };
});

