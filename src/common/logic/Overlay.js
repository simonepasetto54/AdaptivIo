import { Toast } from "../mixins/swal";
import Pickr from '@simonwep/pickr/dist/pickr.es5.min';
import '@simonwep/pickr/dist/themes/classic.min.css';   // 'classic' theme
import '@simonwep/pickr/dist/themes/monolith.min.css';  // 'monolith' theme
import '@simonwep/pickr/dist/themes/nano.min.css'; 


export const openOverlay = () => {
    const elementOverlayed = document.getElementById("overlay");
    elementOverlayed.classList.add("overlay");
    const customNav = document.getElementById("customNav");
    customNav.classList.add("z11", "editable");
    const overlayElement = document.getElementById("close-overlay")
    overlayElement.classList.remove("d-none")
    Toast.fire({
    //niente perchè di default è come nel file swal.js
    didOpen: function() {

      Pickr.create({
        el: "#colorPicker",
        theme: "nano",
        default: "#563d7c",
        components: {
          preview: true,
          hue: true,
          interaction: {
            hex: true,
            rgba: true,
            input: true,
            save: true,
          },
        },
      });
    },
  })};

  export const closeOverlay = () =>{ 
    const elementOverlayed = document.getElementById("overlay");
      elementOverlayed.classList.remove("overlay");
      const customNav = document.getElementById("customNav");
      customNav.classList.remove("z11", "editable");
      const overlayElement = document.getElementById("close-overlay")
      overlayElement.classList.add("d-none")
    
      Toast.close();
    }