<template>
<div class="site-wrapper" id="to_screen">
  <header>    
    <Navbar></Navbar>
  </header>
  <div>
  <CustomOptions></CustomOptions>
  <ScreenShot></ScreenShot>

</template> 


<script setup>
import Navbar from './common/components/Navbar.vue';
import CustomOptions from './common/components/CustomOptions.vue';
import ScreenShot from '../src/views/ScreenShot.vue'

</script>


<style scoped>


</style>
