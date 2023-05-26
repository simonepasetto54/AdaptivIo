<template>
    <ModalOverlayVue
    :widthOv="'150px'"
    :heightOv="'auto'"
    :topOv="'220px'"
    :leftOv="'920px'"
    :titleContent="'<span>Seleziona il colore primario</span>'"
  >
  <template #modalContent>
    <div id="colorPickerPrimary"></div>
  </template>
  </ModalOverlayVue>
  
  <ModalOverlayVue
    :widthOv="'280px'"
    :heightOv="'auto'"
    :topOv="'120px'"
    :leftOv="'230px'"
    :titleContent="'<p>Clicca sul logo per modificarlo</p>'"
    :modalContent="''"
  >
  </ModalOverlayVue>
    <div class="box-campagne">
        <h4 class="text-center pt-5">Le tue campagne</h4>
        <div class="cont-footer customEl" :style="{ backgroundColor: store.secondaryColor }">
            <div class="cont-campagna">
                <div id="campaignCarousel">
                    <div class="content-gestione">
                        <div class="birthday">
                            <div class="birth-dip">
                                <div class="campaign-img">
                                    <img width="70" src="https://ucarecdn.com/dbb22af6-14cc-4a36-be0e-b46f3a28ef13/"
                                        alt="vendite fatturato">
                                </div>
                                <p>TEST - Premio Produzione Dipendenti</p>
                            </div>
                            <div class="underline-account" :style="{ backgroundColor: store.primaryColor }"></div>
                            <p class="desc-birthday">Bel lavoro!</p>
                        </div>
                        <div class="points-campagna">
                            <div>
                                <p class="end-campagna">Data fine campagna</p>
                                <p class="date-campagna">31/12/2024</p>
                            </div>
                            <div class="punti"><span class="total-point"
                                    :style="{ color: store.primaryColor }">30</span><span> punti</span></div>
                            <button class="accedi-punti primary-btn"
                                :style="{ borderColor: store.primaryColor }">Accedi</button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="link-footer text-white">
                <span class="credits white-font" style="margin-left: 0px;"> Service provided by 
                    <span href="https://amilon.eu/">Amilon SRL</span><br>
                    <a id="linkPrivacy" href="javascript:void(0)">Informativa privacy</a> | <a id="linkCookie" href="javascript:void(0)" >Privacy e cookie policy</a> | <a id="linkConditions" href="javascript:void(0)">Condizioni uso sito</a> | <a href="javascript:void(0)">Cookie Settings</a></span>
                    <img class="call-center" src="../../../../assets/imgs/fc.png" alt="">
            </div>
        </div>

    </div>
    <ModalOverlayVue
    :widthOv="'150px'"
    :heightOv="'auto'"
    :topOv="'500px'"
    :leftOv="'920px'"
    :titleContent="'<span>Seleziona il colore secondario</span>'"
  >
  <template #modalContent>
    <div id="colorPickerSecondary"></div>
  </template>
  </ModalOverlayVue>
</template>

<script setup>
import { useCustomizationStoreJJ } from "../store/customization";
import ModalOverlayVue from "../../../components/ModalOverlay.vue"

const store = useCustomizationStoreJJ();
</script>

<style lang="scss" scoped>
.box-campagne {

    .cont-footer {
        flex-grow: 1;
        width: 100%;
        margin-top: 90px;
        position: relative;
        padding: 0 2%;

        .cont-campagna {
            width: 70%;
            margin: auto;
            background-color: #fff;
            box-shadow: 0 0 10px #444;
            position: relative;
            display: flex;
            flex-direction: column;
            border-radius: 20px;
            top:-60px;

            p {
                margin: 0;
            }

            .content-gestione {
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                width: 70%;
                padding: 30px 0;
                height: 100%;
                margin: auto;
                display: flex;
                height: 250px;

                .birthday {
                    width: 50%;
                }

                .points-campagna {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 100%;
                    width: 40%;
                    margin-top: 0;

                    .end-campagna {
                        font-size: 18px;
                        font-weight: 500;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }

                    .date-campagna {
                        font-size: 18px;
                        font-weight: 700;
                    }

                    .punti {
                        padding: 15px 10px;
                        width: 90%;
                        text-align: center;
                        position: relative;

                        .total-point {
                            display: inline-block;
                            color: var(--primary-color);
                            font-size: 25px;
                            font-weight: 600;
                        }
                    }

                    .primary-btn {
                        border: solid 3px;
                        font-size: 16px;
                        font-weight: 700;
                        white-space: nowrap;
                        background-color: #fff;
                        border-radius: 50px;
                        padding: 0 40px;
                        min-height: 40px;
                        text-transform: initial;
                        transition: ease all .15s;
                    }
                }

                .birth-dip {
                    text-transform: uppercase;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: start;
                    align-items: center;
                    height: 90px;


                    p {
                        flex-grow: 1;
                        padding: 0 5px;
                        font-size: 16px;
                        font-weight: 600;
                        max-height: 90px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        text-align: initial;
                        margin: 0;
                    }
                }

                .underline-account {
                    height: 2px;
                    margin: 10px auto;
                }
            }

            

        }
        .link-footer{
            font-size: 11px !important;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
            a{
                color:white

            }
            .call-center{
                max-width: 50px !important;
            }
        }
    }
}
</style>