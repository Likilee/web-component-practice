<template>
  <div class="card-container">
    안녕하세요. {{ msg }}
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  defineProps({
    msg: String
  })
</script>

<style scoped>
  .card-container {
    width: 300px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
</style>
