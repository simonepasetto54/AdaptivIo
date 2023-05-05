<template>
    <img class="py-5 custom-img" src="src\assets\imgs\custom_hp_img.png" alt="">
    <div class="text-center" >
        <h4 class="text-custom" ref="titleCustom" @keyup="validate($event.target, 'titleCustom')">Benvenuto in Randstad Welfare Card</h4>
        <p class="text-custom" ref="subTitleCustom" @keyup="validate($event.target, 'subTitleCustom')">Oltre il semplice Bonus</p>
        <p class="text-custom" ref="textCustom" @keyup="validate($event.target, 'textCustom')">{{store.textCustom}}</p>
    </div>
</template>

<script setup>

import { ref, watch } from 'vue'
import { useCustomizationStore } from "../store/customization";

const store = useCustomizationStore();
    const textCustom = ref(null)
    const subTitleCustom = ref(null)
    const titleCustom = ref(null)  

  const validate = (element,type) => {
    store.setTextCustom(element.innerText.trim(), type)
  }

</script>

<style lang="scss" scoped>
.custom-img{
    width: 100%;
}
</style>