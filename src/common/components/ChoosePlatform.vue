<template>
    <div class="container">
        <div class="row flex-center h100vh ">
            <div class="col-md-4 platform-box flex-center" @click="selectPlatform('ideaShopping')">
                <img src="https://www.idea-shopping.com/assets/ideashopping30/images/png/logo/logo.png" alt="">
            </div>
            <div class="col-md-4 platform-box flex-center mx-5" @click="selectPlatform('jobandjoy')">
                <img src="https://ucarecdn.com/d5d41b9a-0b28-469a-833e-680699eb5ab5/" alt="">
            </div>
            <div class="col-md-4 platform-box flex-center" @click="selectPlatform('mygate')">
                <h4>My gate</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
import {usePlatformStore} from '../../stores/platform'
const store = usePlatformStore();

const selectPlatform = (plat) =>{
  store.setPlatform(plat)
}
</script>

<style lang="scss" scoped>
.platform-box{
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    img{
        max-width: 120px;
        box-shadow: none;
    }
   
}
 
 .platform-box:hover{
box-shadow:0px 6px 16px 0px hsla(0, 0%, 0%, 0.25);
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
 }

</style>