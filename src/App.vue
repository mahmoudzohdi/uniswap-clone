<template>
  <Header />
  <main class="page-content">
    <router-view />
  </main>
  <ConnectWalletModal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/layout/Header.vue";
import ConnectWalletModal from "@/components/shared/connect-wallet/ConnectWalletModal.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    ConnectWalletModal,
  },
});
</script>

<style>
html {
  background-color: #212429;
}
body {
  min-height: 100vh;
  margin: 0;
  background: -moz-linear-gradient(
    top,
    rgba(252, 7, 125, 0.06) 0%,
    rgba(33, 36, 41, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(252, 7, 125, 0.06) 0%,
    rgba(33, 36, 41, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(252, 7, 125, 0.06) 0%,
    rgba(33, 36, 41, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0ffc077d', endColorstr='#212429',GradientType=0 ); /* IE6-9 */
}
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  color: #fff;
}
a {
  color: inherit;
}
button {
  background: none;
  border: none;
  cursor: pointer;
}
.page-content {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}
.svg-image-to-white {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(316deg)
    brightness(109%) contrast(109%);
}
</style>
