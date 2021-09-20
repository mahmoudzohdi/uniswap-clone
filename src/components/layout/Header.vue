<template>
  <header>
    <div class="app-logo">
      <img src="@/assets/images/logo.svg" alt="Uniswap logo" />
    </div>

    <AppNav />

    <div class="app-menu">
      <button class="menu-toggler">
        <img
          class="svg-image-to-white"
          src="@/assets/images/icons/menu-icon.svg"
          alt="menu icon"
        />
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
  padding: 10px 12px;
  border-radius: 12px;
  line-height: 1;
  img {
    width: 18px;
  }
}
</style>
