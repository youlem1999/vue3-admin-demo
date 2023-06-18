<template>
  <AppProvider>
    <router-view></router-view>
  </AppProvider>
</template>

<script setup lang="ts">
import AppProvider from '@/components/AppProvider/index.vue'
</script>

<style lang="scss">
body{
  background: $dark-bgColor;
}
</style>
