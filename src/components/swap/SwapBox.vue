<template>
  <section class="swap-box">
    <header class="box-header">
      <h3 class="box-title">Swap</h3>
      <TransactionSettings />
    </header>

    <article class="box-body">
      <div class="currency-input">
        <div class="input-holder">
          <SelectTokenModal v-model="swapFrom.address" />
          <input placeholder="0.0" v-model="swapFrom.value" />
        </div>
        <p class="input-note" v-if="isMetaMaskInstalled && swapFrom.address">
          Balance: 0 {{ getTokenByAddress(swapFrom.address).symbol }}
        </p>
      </div>
      <div class="currency-input">
        <div class="input-holder">
          <SelectTokenModal v-model="swapTo.address" />
          <input placeholder="0.0" v-model="swapTo.value" />
        </div>
        <p class="input-note" v-if="isMetaMaskInstalled && swapTo.address">
          Balance: 0 {{ getTokenByAddress(swapTo.address).symbol }}
        </p>
      </div>
    </article>

    <footer>
      <Button
        variant="primary-text"
        size="large"
        block
        :disabled="accounts?.length"
        @click="openConnectWalletModal"
      >
        {{ accounts?.length ? "Enter an amount" : "Connect Wallet" }}
      </Button>
    </footer>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import MetaMaskOnboarding from "@metamask/onboarding";
import Button from "@/components/core/Button.vue";
import TransactionSettings from "@/components/swap/TransactionSettings.vue";
import SelectTokenModal from "@/components/shared/select-token/SelectTokenModal.vue";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("WalletModule");

export default defineComponent({
  name: "SwapBox",
  components: {
    Button,
    SelectTokenModal,
    TransactionSettings,
  },
  data() {
    return {
      isMetaMaskInstalled: MetaMaskOnboarding.isMetaMaskInstalled(),
      swapFrom: {
        address: "",
        value: "",
      },
      swapTo: {
        address: "",
        value: "",
      },
    };
  },
  computed: {
    ...mapState(["accounts", "tokens"]),
  },
  methods: {
    ...mapActions(["openConnectWalletModal", "getTokens"]),
    getTokenByAddress(address) {
      return this.tokens.find((token) => token.address === address);
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
