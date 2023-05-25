<template>
    <div class="draft-wrapper">
        <div class="draft_position">
            <div class="save_draft_button flex-center">
                <p class="m-0 text-white">Salva la bozza</p>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.draft-wrapper {
    width: 500px;
    height: 500px;
    position: fixed;
    z-index: 1;
    left: 0;
    bottom: 0;

    .draft_position {
        position: absolute;
        top: 380px;
        left: 30px;
        width: 120px;
        height: 112px;
        border-radius: 50%;
        z-index: 2;

        .save_draft_button {
            display: flex;
            width: 120px;
            height: 40px;
            background-color: #1b2032;
            position: absolute;
            left: 0;
            top: 50%;
            cursor: pointer;
            border-radius: 20px;
        }
    }


}
</style>