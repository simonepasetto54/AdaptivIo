import { cPicker } from "../mixins/pickr"

export const openOverlay = () => {
    const elementOverlayed = document.getElementById("overlay");
    elementOverlayed.classList.add("overlay");
    const customNav = document.getElementById("customNav");
    customNav.classList.add("z11", "editable");
    const overlayElement = document.getElementById("close-overlay")
    overlayElement.classList.remove("d-none")

    const modalsCustomElement = document.getElementsByClassName('overlay-modal');
    modalsCustomElement[0].classList.remove("d-none")
    cPicker('#colorPicker')
};

  export const closeOverlay = () =>{ 
    const elementOverlayed = document.getElementById("overlay");
      elementOverlayed.classList.remove("overlay");
      const customNav = document.getElementById("customNav");
      customNav.classList.remove("z11", "editable");
      const overlayElement = document.getElementById("close-overlay")
      overlayElement.classList.add("d-none")

      const modalsCustomElement = document.getElementsByClassName('overlay-modal');
    modalsCustomElement[0].classList.add("d-none")

    }