<template>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="resetPreview()"></button>
        </div>
        <div class="modal-body" id="to_preview">
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="resetPreview()">Close</button>
          <button type="button" class="btn btn-primary" @click="saveImage('to_screen')">Download preview</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {resetPreview, saveImage} from '../common/logic/Screenshot'

</script>