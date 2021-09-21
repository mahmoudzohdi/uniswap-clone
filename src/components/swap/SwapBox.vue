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

    <article class="box-body">
      <div class="currency-input">
        <div class="input-holder">
          <Button variant="primary">Select a token</Button>
          <input placeholder="0.0" />
        </div>
        <p class="input-note">
          Balance: 0 ETH
        </p>
      </div>
      <div class="currency-input">
        <div class="input-holder">
          <Button variant="primary">Select a token</Button>
          <input placeholder="0.0" />
        </div>
        <p class="input-note">
          Balance: 0 ETH
        </p>
      </div>
    </article>

    <footer>
      <Button
        variant="primary-text"
        size="large"
        block
        :disabled="accounts?.length"
        @click="openWalletsModal"
      >
        {{ accounts?.length ? "Enter an amount" : "Connect Wallet" }}
      </Button>
    </footer>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import Button from "@/components/core/Button.vue";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("WalletModule");

export default defineComponent({
  name: "SwapBox",
  components: {
    Button,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["accounts", "tokens"]),
  },
  methods: {
    ...mapActions(["openConnectWalletModal", "getTokens"]),
    openWalletsModal() {
      this.openConnectWalletModal();
    },
  },
  created() {
    this.getTokens();
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
.box-body {
  margin-bottom: 8px;
}
.currency-input {
  border-radius: 20px;
  border: 1px solid $darkBorderColor;
  background-color: $darkSecondaryBackground;
  padding: 16px;
  margin-bottom: 4px;
  &:hover {
    border-color: $darkBorderSecondaryColor;
  }
  .input-holder {
    display: flex;
    justify-content: space-between;
  }
  input {
    background: none;
    border: none;
    font-size: 24px;
    text-align: right;
    color: #fff;
    &:focus,
    &:active {
      outline: none;
    }
  }
  .input-note {
    font-size: 14px;
    font-weight: 400;
    color: $grayText;
    margin: 12px 0 0;
  }
}
</style>
