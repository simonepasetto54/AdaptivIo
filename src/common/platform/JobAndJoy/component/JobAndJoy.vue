<template>
    <div :class="fFam" style="backgroundColor:#f6f6f6" id="to_screen">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <header>
            <Navbar></Navbar>
          </header>
          <CampaignBox></CampaignBox>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>  
  <CustomOptions></CustomOptions>


</template>

<script setup>
import Navbar from "./Navbar.vue";
import CustomOptions from "../../../components/CustomOptions.vue";
import CampaignBox from "./CampaignBox.vue";
import { usePlatformStore } from '../../../../stores/platform';

const store = usePlatformStore();
store.setPlatform("jobandjoy")
  const props = defineProps(["fFam"]);
</script>

<style>
.montserratFont{
font-family: 'Montserrat',sans-serif !important;
}
</style>
