<template>
  <section class="swap-box">
    <header class="box-header">
      <h3 class="box-title">Swap</h3>
      <div class="box-settings">
        <button class="settings-toggler">
          <img
            class="svg-image-to-white"
            src="@/assets/images/icons/settings-icon.svg"
            alt="settings icon"
          />
        </button>
      </div>
    </header>

    <footer>
      <Button
        variant="primary-text"
        size="large"
        block
        @click="openWalletsModal"
      >
        Connect Wallet
      </Button>
    </footer>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import Button from "@/components/core/Button.vue";
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers("WalletModule");

export default defineComponent({
  name: "SwapBox",
  components: {
    Button,
  },
  methods: {
    ...mapActions(["openConnectWalletModal"]),
    openWalletsModal() {
      this.openConnectWalletModal();
    },
  },
});
</script>

<style lang="scss" scoped>
.swap-box {
  width: 100%;
  max-width: 480px;
  padding: 8px;
  background-color: $darkBackground;
  border-radius: 24px;
  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
    rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
  .box-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
  }
  .box-title {
    font-size: 16px;
    margin: 0;
  }
  .settings-toggler {
    img {
      width: 20px;
    }
  }
}
</style>
