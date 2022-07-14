<script setup lang="ts">
import IconGitHub from '@/components/themes/icons/IconGitHub.vue';
</script>
<template>
  <header>
    <div class="container">
      <nav class="d-flex justify-content-center justify-content-md-between align-items-center">
        <h1 class="reset-typography-space d-none d-md-block">
          <a class="logo" href="#">
            #funstyle
          </a>
        </h1>
        <ul class="d-flex">
          <li class="mx-2">
            <router-link to="/guide">Guide</router-link>
          </li>
          <li class="mx-2">
            <a href="#">Examples</a>
          </li>
          <li class="mx-2 d-flex">
            <a href="#" class="d-flex align-items-center">
              <IconGitHub />
            </a>
          </li>
          |
          <li class="mx-2">
            <small>
              <i>Currently <strong>v1.0.0</strong></i>
            </small>
          </li>
        </ul>
      </nav>

    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 65px;
  line-height: 65px;
}

.logo {
  color: var(--fs-primary);
}

small {
  font-size: 80%;
}
</style>