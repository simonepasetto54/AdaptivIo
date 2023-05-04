<template>
  <nav class="navbar" id="customNav" :style="{ backgroundColor: store.primaryColor }">
    <div class="container d-flex justify-content-between">
      <a class="navbar-brand" href="#">
        <p style="margin: 0; font-size: 14px; color: white">
          Powered By Idea Shopping ®
        </p>
      </a>
      <div class="icons-navbar" style="color: white">
        <i class="bi bi-heart"></i>
        <i class="bi bi-cart2 ms-3"></i>
      </div>
    </div>
  </nav>
  <ModalOverlayVue
    :widthOv="'150px'"
    :heightOv="'auto'"
    :topOv="'60px'"
    :leftOv="'10px'"
    :titleContent="'<p>Scegli il colore primario</p>'"
    :modalContent="'<div id=&quot;colorPickerPrimary&quot;></div>'"
  >
  </ModalOverlayVue>
  <!-- <ModalOverlayVue
    :widthOv="'150px'"
    :heightOv="'auto'"
    :topOv="'160px'"
    :leftOv="'100px'"
    :titleContent="'<p>Scegli il colore secondario</p>'"
    :modalContent="'<div id=&quot;colorPickerSecondary&quot;></div>'"
  >
  </ModalOverlayVue> -->
  <div class="logo-navbar d-flex align-items-center" style="height: 100px">
    <div class="container">
      <div class="row">
        <div class="col-md-3 align-items-center">
          <a class="navbar-brand" href="#">
            <img src="../../assets/imgs/logo.png" class="w-75" alt="" />
          </a>
        </div>
        <div class="col-md-9">
          <div
            class="wrapper-action-navbar d-flex justify-content-end align-items-center h-100"
          >
            <div class="d-flex">
              <div class="mx-5">
                <i class="bi bi-gift"></i>
                <b>Scegli le Gift Card</b>
              </div>
              <div>
                <i class="bi bi-tag"></i>
                <b>Come funziona</b>
              </div>
            </div>
            <div
              class="shopping-button d-flex align-items-center justify-content-center"
              :style="{ backgroundColor: store.primaryColor }"
              style="color: white"
            >
              <i class="bi bi-bag-plus me-3"></i>
              <span>Ho un Codice Shopping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ModalOverlayVue from "./ModalOverlay.vue";
import { useCustomizationStore } from "../platform/IdeaShopping/store/customization";

const store = useCustomizationStore();

let modalContent = "<div id='colorPicker'></div>";
let titleContent = "<p>Scegli il colore primario</p>";
</script>

<style lang="css" scoped>
.wrapper-action-navbar {
  color: #2779da;
  gap: 50px;
}

.shopping-button {
  border-radius: 25px;
  height: 40px;
  width: 250px;
}

b {
  color: #000000;
  font-size: 13px;
}

.navbar-style {
  height: 50px;
}

.logo-navbar{
  box-shadow: 0px 2px 9px 0px rgba(150,150,150,0.7)
}
</style>
