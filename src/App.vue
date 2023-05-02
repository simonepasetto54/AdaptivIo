<template>
  <div class="site-wrapper" id="to_screen" >
    <header>
      <Navbar></Navbar>
    </header>
    <div class=""></div>
  </div>
  <CustomOptions></CustomOptions>
  <ScreenShot></ScreenShot>
  <div id="overlay">
    <i class="bi bi-x d-none" id="close-overlay" @click="closeOverlay"></i>
  </div>
</template>

<script setup>
import Navbar from "./common/components/Navbar.vue";
import CustomOptions from "./common/components/CustomOptions.vue";
import ScreenShot from "../src/views/ScreenShot.vue";
import Swal from "sweetalert2";

const closeOverlay = () =>{ // da mettere in un file di logic da importare nell'app quando serve?
const elementOverlayed = document.getElementById("overlay");
  elementOverlayed.classList.remove("overlay");
  const customNav = document.getElementById("customNav");
  customNav.classList.remove("z11", "editable");
  const overlayElement = document.getElementById("close-overlay")
  overlayElement.classList.add("d-none")

  Swal.close();
}
</script>

<style scoped>
#close-overlay{
  position: fixed;
    top: 48px;
    right: 20px;
    color: white;
    z-index: 54;
    font-size: 40px;
}
</style>
