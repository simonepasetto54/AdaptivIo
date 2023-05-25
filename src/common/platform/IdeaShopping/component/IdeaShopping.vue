<template>
<div :class="fFam" id="to_screen">
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
<CustomOptions></CustomOptions>
<SaveDraft></SaveDraft>

</template>

<script setup>
import Navbar from "./Navbar.vue";
import WelcomeText from "./WelcomeText.vue";
import CustomOptions from "../../../components/CustomOptions.vue";
import { usePlatformStore } from '../../../../stores/platform';
import SaveDraft from "../../../components/SaveDraft.vue";

const store = usePlatformStore();
store.setPlatform("ideashopping")

const props = defineProps(["fFam"]);
</script>

<style>
.poppinFont{
font-family: 'Poppins', sans-serif !important;
}
</style>
