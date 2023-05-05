<template>
  <div class="container p-3">
    <div class="row pb-3">
      <div class="col-md-6">
        <img src="src\assets\imgs\Italyflag.png" width="25" alt />
        <span class="px-2">LINGUA</span>
      </div>
      <div class="col-md-6 text-end">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" :fill="store.primaryColor"
          class="bi bi-box-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
          <path fill-rule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
        </svg>
        <span>ESCI</span>
      </div>
    </div>
    <input type="file" ref="logoFile" style="display: none" @change="handleFileChange" />
    <div class="row">
      <div class="col-md-12 mx-auto mw250 mb-5">
        <img :src="imgSrc || store.logo" @click="$refs.logoFile.click()" id="logo-custom" class="w-100" alt />
      </div>
    </div>
    <Menu></Menu>
    <IntroBox :primaryColor="store.primaryColor"></IntroBox>
  </div>
</template>

<script setup>
import { useCustomizationStore } from "../store/customization";
import Menu from "../views/Menu.vue";
import IntroBox from "../views/IntroBox.vue";
const store = useCustomizationStore();

const handleFileChange = (event) => {
  const file = event.target.files[0];
  const src = URL.createObjectURL(file);
  store.setImg(src);
};
</script>

<style lang="scss" scoped>
.mw250 {
  max-width: 250px;
}
</style>
