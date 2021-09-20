<template>
  <header>
    <div class="app-logo">
      <img alt="Uniswap logo" src="@/assets/logo.svg" />
    </div>

    <AppNav />

    <div class="app-menu">
      <button class="menu-toggler">
        <img src="@/assets/menu-icon.svg" alt="menu icon" />
      </button>
      <ul class="menu-list"></ul>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNav from "./AppNav.vue";

export default defineComponent({
  name: "Header",
  components: {
    AppNav,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.app-logo img {
  width: 24px;
}

.app-menu .menu-toggler {
  display: flex;
  background: $darkBackground;
  border: none;
  padding: 10px 12px;
  border-radius: 12px;
  line-height: 1;
  img {
    width: 18px;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(316deg)
      brightness(109%) contrast(109%);
  }
}
</style>
