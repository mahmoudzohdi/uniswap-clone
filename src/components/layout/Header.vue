<template>
  <header>
    <div class="app-logo">
      <img src="@/assets/images/logo.svg" alt="Uniswap logo" />
    </div>

    <AppNav />

    <div class="app-menu">
      <Button v-if="accountAddress" variant="dark" class="user-wallet">
        {{ truncate(accountAddress, 10) }}
      </Button>
      <Button
        v-else
        class="connect-wallet-button"
        variant="primary-text"
        block
        @click="openConnectWalletModal"
      >
        {{ "Connect Wallet" }}
      </Button>
      <Button variant="dark" class="menu-toggler">
        <img
          class="svg-image-to-white"
          src="@/assets/images/icons/menu-icon.svg"
          alt="menu icon"
        />
      </Button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MetaMaskOnboarding from "@metamask/onboarding";
import Button from "@/components/core/Button.vue";
import { truncate } from "@/utils/text";
import AppNav from "./AppNav.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("WalletModule");

export default defineComponent({
  name: "Header",
  components: {
    AppNav,
    Button,
  },
  data() {
    return {
      truncate,
    };
  },
  computed: {
    ...mapState(["accountAddress"]),
  },
  methods: {
    ...mapActions(["openConnectWalletModal", "setAccountAddress"]),
  },
  mounted() {
    if (
      MetaMaskOnboarding.isMetaMaskInstalled() &&
      window["ethereum"].isConnected()
    ) {
      this.setAccountAddress(window["ethereum"].selectedAddress);
    }
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

.app-menu {
  display: flex;
  .user-wallet {
    font-size: 16px;
    margin-right: 10px;
  }
  .menu-toggler {
    display: inline-flex;
    align-items: center;

    img {
      width: 18px;
    }
  }
}
.connect-wallet-button {
  margin-right: 8px;
}
</style>
