import {cPicker} from "../mixins/pickr";

export const openOverlay = () => {
    const elementOverlayed = document.getElementById("overlay");
    elementOverlayed.classList.add("overlay");
    const customEl = document.querySelectorAll(".customEl");
    customEl?.forEach((element) => {
      element.classList.add("z11", "editable");
    });
    const overlayElement = document.getElementById("close-overlay")
    overlayElement.classList.remove("d-none")
    const modalsCustomElements = document.querySelectorAll('.overlay-modal');

    modalsCustomElements.forEach((element) => {
      element.classList.remove('d-none');
    });
    const textCustom = document.querySelectorAll('.text-custom');
    textCustom.forEach((element) => {
      element.classList.add("customModalOverlay")
      element.setAttribute('contenteditable', "");
    });

    const logoCustom = document.getElementById("logo-custom");
    logoCustom.classList.add("customModalOverlay");
    
    cPicker('#colorPickerPrimary','primary')
    cPicker('#colorPickerSecondary','secondary')

    
    
};

  export const closeOverlay = () =>{ 
    const elementOverlayed = document.getElementById("overlay");
      elementOverlayed.classList.remove("overlay");

      const customEl = document.querySelectorAll(".customEl");
      customEl?.forEach((element) => {
      element.classList.remove("z11", "editable");
    });

      const overlayElement = document.getElementById("close-overlay")
      overlayElement.classList.add("d-none")
const modalsCustomElements = document.querySelectorAll('.overlay-modal');

      modalsCustomElements.forEach((element) => {
        element.classList.add('d-none');
      });

      const textCustom = document.querySelectorAll('.text-custom');
    textCustom.forEach((element) => {
      element.classList.remove("customModalOverlay")
      element.removeAttribute('contenteditable', "");
    });

    const logoCustom = document.getElementById("logo-custom");
    logoCustom.classList.remove("customModalOverlay");

    }