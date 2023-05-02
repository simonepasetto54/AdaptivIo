<template>
  <div class="options-wrapper" :style="{ visibility: updateVisibility }">
    <div class="custom_position">
      <div class="options-button" @mouseover="openOptions('visible')">
        <i class="bi bi-gear" style="color: white"></i>
      </div>
    </div>
    <div class="section-option-wrapper" @mouseleave="openOptions('hidden')">
      <div class="graphic-options flex-center" @click="openOverlay()">
        <i class="bi bi-pencil-fill" style="color: #1b2032"></i>
      </div>
      <div
        class="screenshot-options flex-center"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="previewSite('to_save')"
      >
        <i class="bi bi-camera-fill" style="color: #1b2032"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { previewSite } from "../logic/Screenshot";
import {openOverlay} from '../logic/Overlay';

let updateVisibility = ref("hidden");
const openOptions = (option) => {
  updateVisibility.value = option;
  const optionWrapper = document.getElementsByClassName(
    "section-option-wrapper"
  );
  optionWrapper[0].classList.toggle(
    "section-option-wrapper-open",
    option === "visible"
  );
};

</script>

<style lang="scss" scoped>
.graphic-options {
  width: 56px;
  height: 56px;
  background-color: white;
  position: absolute;
  left: 10%;
  top: 40%;
  cursor: pointer;
  border-radius: 50%;
}

.screenshot-options {
  @extend .graphic-options;
  left: 17%;
  top: 22%;
}
</style>
