<template>
<router-view></router-view>
    <ScreenShot></ScreenShot>
    <div id="overlay">
      <i class="bi bi-x d-none" id="close-overlay" @click="closeOverlay()"></i>
    </div>
</template>

<script setup>
import ScreenShot from "../src/views/ScreenShot.vue";
import { closeOverlay } from "../src/common/logic/Overlay";
</script>

<style scoped>
#close-overlay {
  position: fixed;
  top: 48px;
  right: 20px;
  color: white;
  z-index: 54;
  font-size: 40px;
}
</style>
