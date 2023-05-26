<template>
  <div class="overlay-modal d-none z11" :style="{ width: widthOv, height: heightOv, top: topOv, left: leftOv }">
    
    <div v-html="titleContent"></div>
    <!-- <div v-html="modalContent"></div> -->
    <slot name="modalContent"></slot>
    
  </div>
  
</template>

<script setup>
const props = defineProps(["widthOv", "heightOv", "topOv", "leftOv", "titleContent", "modalContent"]);
</script>

<style lang="scss" scoped>
.overlay-modal {
  padding: 10px;
  position: absolute;
  background-color: white;
  border-radius: 15px;
}
</style>
