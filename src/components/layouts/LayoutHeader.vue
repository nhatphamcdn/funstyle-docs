<script setup lang="ts">
import IconGithub from '@/components/themes/icons/IconGithub.vue';
</script>
<template>
  <header>
    <div class="container">
      <nav class="d-flex justify-content-center justify-content-md-between align-items-center">
        <h1 class="reset-typography-space d-none d-md-block">
          <router-link class="logo" to="/">
            #funstyle
          </router-link>
        </h1>
        <ul class="d-flex">
          <li class="mx-2">
            <router-link to="/guide">Guide</router-link>
          </li>
          <li class="mx-2">
            <a href="#">Examples</a>
          </li>
          <li class="mx-2 d-flex">
            <a href="https://github.com/nhatphamcdn/funstyle" target="_blank" class="d-flex align-items-center">
              <IconGithub />
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
.router-link-active {
  color: var(--fs-primary-hover);
}
header {
  height: 65px;
  line-height: 65px;

  a {
    &:focus {
      --fs-background-color: transparent;
    }
  }
}

.logo {
  color: var(--fs-primary);
}

small {
  font-size: 80%;
}
</style>