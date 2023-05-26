import Pickr from '@simonwep/pickr/dist/pickr.es5.min';
import '@simonwep/pickr/dist/themes/classic.min.css';   // 'classic' theme
import '@simonwep/pickr/dist/themes/monolith.min.css';  // 'monolith' theme
import '@simonwep/pickr/dist/themes/nano.min.css'; 
import { usePlatformStore } from "../../stores/platform";

export const cPicker = (element, colorType ) => {
  let platformSelected = usePlatformStore()


  let selectColor = () => {
    let primaryOrSecondary = colorType + 'Color';
    return platformSelected.entryStores[platformSelected.platform][primaryOrSecondary]
  }
 const pickr = Pickr.create({
    el: element,
    theme: "nano",
    default: selectColor(),
    defaultRepresentation: 'HEX',
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

  //specificare se primario o secondario e quale store deve modificare
  pickr.on('changestop', () => {
    let selectedColor = pickr.getColor()
    let rgba = selectedColor.toHEXA().toString(3);

    let colorUppercase = colorType.charAt(0).toUpperCase() + colorType.slice(1);
    let colorToBeUpdated = `set${colorUppercase}Color`
    platformSelected.entryStores[platformSelected.platform][colorToBeUpdated](rgba)


})


}

