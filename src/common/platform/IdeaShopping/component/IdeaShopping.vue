<template>
<div :class="fFam">
    <header>
      <Navbar></Navbar>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <WelcomeText></WelcomeText>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
    
</div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import WelcomeText from "./WelcomeText.vue";
 const props = defineProps(["fFam"]);

</script>

<style>
.poppinFont{
font-family: 'Poppins', sans-serif !important;
}
</style>
