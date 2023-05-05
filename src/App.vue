<template>
<!-- inserire il routing per l'app in modo da tornare indietro dopo la selezione -->
<router-view></router-view>
  
<!-- <ChoosePlatform v-if="store.platform === ''"></ChoosePlatform> 
  <div id="platform-wrapper" v-else >
    <div class="site-wrapper" id="to_screen" >
      <div v-if="store.platform === 'ideaShopping'" >
        <IdeaShopping :fFam="'poppinFont'"></IdeaShopping>
      </div>
      <div v-else-if="store.platform === 'jobandjoy'" >
        <JobAndJoy :fFam="'montserratFont'"></JobAndJoy>
      </div>
    </div>
    
  </div> -->
    <ScreenShot></ScreenShot>
    <div id="overlay">
      <i class="bi bi-x d-none" id="close-overlay" @click="closeOverlay()"></i>
    </div>
</template>

<script setup>
import ScreenShot from "../src/views/ScreenShot.vue";
import { closeOverlay } from "../src/common/logic/Overlay";
// import IdeaShopping from "./common/platform/IdeaShopping/component/IdeaShopping.vue";
// import JobAndJoy from "./common/platform/JobAndJoy/component/JobAndJoy.vue";
// import ChoosePlatform from "./common/components/ChoosePlatform.vue";

import { usePlatformStore } from "./stores/platform";
const store = usePlatformStore();
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
