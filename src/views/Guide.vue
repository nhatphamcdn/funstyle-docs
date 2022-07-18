<script setup lang="ts">
import { ref, onMounted } from 'vue';

const GROUPS = [
  {
    heading: "Getting started",
    items: [
      {
        title: "Introduction",
        path: "/guide/introduction"
      },
      {
        title: "Installation",
        path: "/guide/installation"
      },
      {
        title: "Usage",
        path: "/guide/usage"
      },
    ]
  }
];

const sidebarGroups = ref(GROUPS);

</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="sidebar">
          <div class="group-items" v-for="(group, i) in sidebarGroups" :key="`group-${i}`">
            <h4>{{ group.heading }}</h4>
            <div class="pl-2">
              <router-link class="d-block" v-for="item in group.items" :key="`group-item-${i}`" :to="item.path">
                {{ item.title }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sidebar {
  @include media-breakpoint-up(md) {
    border-right: 1px solid #ccc;
    height: calc(100vh - 65px - 65px);
    overflow-y: auto;
  }
}

.group-items {
  --fs-typography-spacing-vertical: .5rem;

  a {
    &:focus {
      --fs-background-color: transparent;
    }
  }
}
</style>
