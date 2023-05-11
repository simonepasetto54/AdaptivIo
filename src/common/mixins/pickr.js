import Pickr from '@simonwep/pickr/dist/pickr.es5.min';
import '@simonwep/pickr/dist/themes/classic.min.css';   // 'classic' theme
import '@simonwep/pickr/dist/themes/monolith.min.css';  // 'monolith' theme
import '@simonwep/pickr/dist/themes/nano.min.css'; 
import { useCustomizationStore } from '../platform/IdeaShopping/store/customization';
import { useCustomizationStoreJJ } from '../platform/JobAndJoy/store/customization';
import { usePlatformStore } from "../../stores/platform";

export const cPicker = (element, colorType) => {
  let iSstore = useCustomizationStore();
  let jJStore = useCustomizationStoreJJ();
  let platformSelected = usePlatformStore()

 const pickr = Pickr.create({
    el: element,
    theme: "nano",
    default: "#563d7c",
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
    
let storeToBeChanged =  platformSelected.platform == 'ideashopping' ? iSstore : jJStore
    colorType === 'primary'?
    storeToBeChanged.setPrimaryColor(rgba) : 
    storeToBeChanged.setSecondaryColor(rgba)
})


}

