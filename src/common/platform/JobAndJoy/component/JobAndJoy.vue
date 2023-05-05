<template>
    <div :class="fFam" style="backgroundColor:#f6f6f6;">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <header>
            <Navbar></Navbar>
          </header>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>  
</template>

<script setup>
import Navbar from "./Navbar.vue";
  const props = defineProps(["fFam"]);
</script>

<style>
.montserratFont{
font-family: 'Montserrat',sans-serif !important;
}
</style>
