<template>
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
    
  
</template>

<script setup>
import Navbar from "../../../components/Navbar.vue";
import WelcomeText from "./WelcomeText.vue";
 
</script>

<style scoped>
</style>
