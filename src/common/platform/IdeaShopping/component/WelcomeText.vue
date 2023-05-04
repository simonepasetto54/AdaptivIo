<template>
    <img class="py-5 custom-img" src="src\assets\imgs\custom_hp_img.png" alt="">
    <div class="text-center" >
        <h4>Benvenuto in Randstad Welfare Card</h4>
        <p>Oltre il semplice Bonus</p>
        <p class="text-custom" ref="textCustom" @keyup="validate">{{store.textCustom}}</p>
    </div>
</template>

<script setup>

import { ref, watch } from 'vue'
import { useCustomizationStore } from "../store/customization";

const store = useCustomizationStore();

  const textCustom = ref(null)

  const validate = (event) => {
    store.setTextCustom(textCustom.value.innerText.trim())
  }

</script>

<style lang="scss" scoped>
.custom-img{
    width: 100%;
}
</style>