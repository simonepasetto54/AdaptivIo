<template>
  <div class="row container-home p-4 d-flex justify-content-between customEl" :style="{ backgroundColor: primaryColor }">
    <div class="col-md-6 box-account">
      <div class="row">
        <div class="col-md-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" :fill="primaryColor" class="bi bi-person-circle"
            viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
        </div>
        <div class="col-md-10">
          <p :style="{ color: primaryColor }" class="welcome-user-title">Ciao ADMIN</p>

        </div>
      </div>
      <div class="underline-account"  :style="{ backgroundColor: primaryColor }">

      </div>
      <div class="row">
        <div class="col-md-12">
          <p class="description-welcome-user">Questa è la tua area personale</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 img-home-background">
      <img src="\src\assets\imgs\jjPc.png" class="w-100">
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["primaryColor"]);

</script>

<style lang="scss" scoped>
.container-home {

  height: 200px;

  .box-account {
    width: 80%;
    background-color: #fff;
    padding: 10px 20px 20px;
    border-radius: 20px;
    box-shadow: 0 0 10px #444;
    max-width: 400px;
    padding: 35px;
  }
}

.underline-account {
    width: 100%;
    height: 2px;
    margin: 10px auto;
}

.img-home-background{
  position: absolute;
    margin-top: unset;
    max-width: 500px;
    left: 50%;
    transform: translate(-7%) translateY(-50%);
    top: 70%;
}


.welcome-user-title{
  font-size: 21px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 10px;
}

.description-welcome-user{
  font-size: 18px;
    font-weight: 450;
}
</style>
