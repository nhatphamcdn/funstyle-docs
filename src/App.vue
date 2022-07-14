<script setup lang="ts">
import LayoutHeader from '@/components/layouts/LayoutHeader.vue';
import LayoutFooter from '@/components/layouts/LayoutFooter.vue';
import '@nhatphamfks-org/funstyle/css/funstyle.min.css';
</script>

<template>
  <LayoutHeader />
  <main>
    <router-view></router-view>
  </main>
  <LayoutFooter />
</template>

<style lang="scss">
// @import '@/assets/scss/main.scss';
</style>
