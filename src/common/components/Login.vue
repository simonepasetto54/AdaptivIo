<template>
        <div class="container">
      <h1 class="mt-5">Login</h1>
      <form @submit.prevent="submitForm" class="mt-4">
        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input type="text" id="username" v-model="username" class="form-control">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input type="password" id="password" v-model="password" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
     </div>
    
  </template>
  
  <script setup>
  import { useOidcStore } from "../../stores/auth";
  import { ref } from "vue";
  
  const oidcStore = useOidcStore();
  const username = ref("");
  const password = ref("");
  
  const submitForm = () => {
    oidcStore.login(username.value, password.value)
      .then(() => {
        // Autenticazione riuscita, esegui le azioni necessarie (reindirizzamento, recupero dati utente, ecc.)
        console.log("Login successful");
      })
      .catch(error => {
        // Gestisci l'errore di autenticazione
        console.error("Login failed:", error);
      });
  };
  </script>
  
  <style scoped>
    body {
        background: red !important;
}
  .container {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  