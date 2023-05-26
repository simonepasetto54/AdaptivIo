<template>
  <div :class="fFam" id="to_screen">
    <img class="img-background" :src="storeCustom.bgImg" src="../../../../assets/imgs/bgMyGate.jpg" :style="{ backgroundColor: storeCustom.primaryColor }" alt="">
    <img class="img-blur" :class="{'d-none': !inputValue}" src="../../../../assets/imgs/bgk_onda.png" alt="">
    
    <div class="row m-0">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-4">
              <input type="file" ref="logoFile" style="display: none" @change="handleFileChange" />
              <div class="row">
                <div class="col-md-12 mx-auto mb-5">
                  <img :src="imgSrc || storeCustom.logo" @click="$refs.logoFile.click()" class="mw175" id="logo-custom"/>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="navbar-tool">
                <div class="contact-us flex-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#66acbd" class="bi bi-headset"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                  </svg>
                </div>
                <div class="language-selection">
                  <span>ITA</span>
                  <img src="../../../../assets/imgs/it-IT_mygateflag.png" width="25" height="25" alt="">
                </div>
              </div>
            </div>
          </div>

          <div class="row text-center">

            <p class="text-white mt-5">Per accedere al tuo voucher inserisci <b>SECURITY NUMBER</b> e <b>PIN</b></p>
            
          </div>
          <div class="row text-center">
            <div class="col-md-6">
              <div class="security-input input-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                  class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
                <div class="mx-2" style="color:#6c757d">SECURITY NUMBER</div>

              </div>
            </div>
            <div class="col-md-6">
              <div class="pin-input input-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key"
                  viewBox="0 0 16 16">
                  <path
                    d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <div class="mx-2" style="color:#6c757d">PIN</div>
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <button class="btn-custom-primary btn-light mt-4" type="button">CONTINUA</button>

            </div>
            <div class="col-md-4"></div>

          </div>
          <div class="row my-4">
            <div class="cookie-policy">
              <div class="flex-center">
                <p>
                  AMILON SRL
                </p>
                <p class="mx-4">COOKIE POLICY</p>
                <p>COOKIE
                  SETTINGS</p>

              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
  <ModalOverlayVue
    :widthOv="'220px'"
    :heightOv="'auto'"
    :topOv="'140px'"
    :leftOv="'230px'"
    :titleContent="'<p>Clicca sul logo per modificarlo</p>'"
    :modalContent="''"
  >
  </ModalOverlayVue>
  <ModalOverlayVue
    :widthOv="'150px'"
    :heightOv="'auto'"
    :topOv="'100px'"
    :leftOv="'1100px'"
    :titleContent="'<span>Seleziona il colore di sfondo</span>'"

  >
  <template #modalContent>
    <div id="colorPickerPrimary"></div>
  </template>
  </ModalOverlayVue>
  <ModalOverlayVue
    :widthOv="'150px'"
    :heightOv="'auto'"
    :topOv="'250px'"
    :leftOv="'1100px'"
    :titleContent="'<span>Abilita sfumatura</span>'">
    <template #modalContent>
    <div class="form-switch">
      <input v-model="inputValue" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
    </div>
  </template>
  </ModalOverlayVue>
  

  <CustomOptions></CustomOptions>
  <SaveDraft></SaveDraft>
  
</template>

<script setup>
import { ref } from 'vue'
import CustomOptions from "../../../components/CustomOptions.vue";
import { usePlatformStore } from '../../../../stores/platform';
import SaveDraft from "../../../components/SaveDraft.vue";
import { useCustomizationStoreMyGate } from "../store/customization";
import ModalOverlayVue from "../../../components/ModalOverlay.vue"

const inputValue = ref(true)
const storeCustom = useCustomizationStoreMyGate();
const storePlat = usePlatformStore();
storePlat.setPlatform("mygate")
const props = defineProps(["fFam"]);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  const src = URL.createObjectURL(file);
  storeCustom.setImg(src)
}

</script>

<style scoped>
.RobotoFont {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
}

#to_screen {

  height: 100vh;

}

.img-blur {
  position: fixed;
}

.navbar-tool {
  display: flex;
  justify-content: end;
  align-items: center;
}

.contact-us {
  background-color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.language-selection {

  min-width: 85px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem;
  border-radius: 24px;
  background-color: white;
  margin-left: 10px;
}

.input-box {
  background: #c4d0db;
  border-radius: 2em;
  border: none;
  margin: 0.8em auto;
  color: #202020;
  font-size: 1.1em;
  outline: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px 10px 5px 10px
}

.btn-custom-primary {
  background-color: #f8f9fa;
  color: #00bfff;
  border-radius: 24px;
  padding: 8px 40px;
  margin: 1.2rem;
  min-width: 182px;
  border-style: none;
}

.flex-center>p {
  color: white;
  text-decoration: underline;
}

.img-background {
  width: 100%;
  height: 100vh;
  position: absolute;
}

.mw175{
  max-width: 175px;
}

.customModalOverlay{
  border: 2px solid white;
  background-color: transparent;
  padding: 5px;
}
</style>
