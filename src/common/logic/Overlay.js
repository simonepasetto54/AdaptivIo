import {cPicker} from "../mixins/pickr";
export const openOverlay = () => {
    const elementOverlayed = document.getElementById("overlay");
    elementOverlayed.classList.add("overlay");
    const customNav = document.getElementById("customNav");
    customNav.classList.add("z11", "editable");
    const overlayElement = document.getElementById("close-overlay")
    overlayElement.classList.remove("d-none")
const modalsCustomElements = document.querySelectorAll('.overlay-modal');

    modalsCustomElements.forEach((element) => {
      element.classList.remove('d-none');
    });
    const textCustom = document.querySelectorAll('.text-custom');
    textCustom.forEach((element) => {
      element.classList.add("z11", "bg-white", "rounded-5")
      element.setAttribute('contenteditable', "");
    });
    
    cPicker('#colorPickerPrimary','primary')
    cPicker('#colorPickerSecondary','secondary')

    
    
};

  export const closeOverlay = () =>{ 
    const elementOverlayed = document.getElementById("overlay");
      elementOverlayed.classList.remove("overlay");
      const customNav = document.getElementById("customNav");
      customNav.classList.remove("z11", "editable");
      const overlayElement = document.getElementById("close-overlay")
      overlayElement.classList.add("d-none")
const modalsCustomElements = document.querySelectorAll('.overlay-modal');

      modalsCustomElements.forEach((element) => {
        element.classList.add('d-none');
      });

      const textCustom = document.querySelectorAll('.text-custom');
    textCustom.forEach((element) => {
      element.classList.remove("z11", "bg-white", "rounded-5")
      element.removeAttribute('contenteditable', "");
    });

    }