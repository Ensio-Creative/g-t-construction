<script setup>
import DesktopNav from './components/navigation/DesktopNav.vue'
import MobileNav from './components/navigation/MobileNav.vue'
</script>

<template>
  <DesktopNav
      class="desktop"
    />
    <MobileNav
      class="mobile"
    />

  <router-view />
</template>

<style lang="scss">
.desktop {
  display: none;
}
@media (min-width: 950px) {
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
}
</style>
