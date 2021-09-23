<template>
  <Modal ref="modal" title="Connect to a wallet" @onHide="onHide">
    <Info>
      By connecting a wallet, you agree to Uniswap Labs’
      <a href="https://uniswap.org/terms-of-service/" target="_blank"
        >Terms of Service</a
      >
      and acknowledge that you have read and understand the
      <a href="https://uniswap.org/disclaimer/" target="_blank"
        >Uniswap protocol disclaimer</a
      >.
    </Info>

    <WalletItem
      v-for="(item, index) in walletProviders"
      :key="index"
      :walletInfo="item"
      @connected="onHide"
    />
  </Modal>
</template>

<script>
import { defineComponent } from "vue";
import Modal from "@/components/core/Modal.vue";
import Info from "@/components/core/Info.vue";
import WalletItem from "./WalletItem.vue";
import { connectMetaMask } from "@/utils/wallet";
import MetaMaskOnboarding from "@metamask/onboarding";

import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("WalletModule");

export default defineComponent({
  name: "ConnectWalletModal",
  components: {
    Modal,
    Info,
    WalletItem,
  },
  data() {
    return {
      walletProviders: [
        {
          name: MetaMaskOnboarding.isMetaMaskInstalled()
            ? "Metamask"
            : "Install Metamask",
          image: require("@/assets/images/metamask-logo.png"),
          onClick: connectMetaMask,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      modalVisibility: (state) => state.connectWalletModal.visibility,
    }),
  },
  methods: {
    ...mapActions(["closeConnectWalletModal"]),
    show() {
      this.$refs.modal.show();
    },
    onHide() {
      this.closeConnectWalletModal();
    },
  },
  watch: {
    modalVisibility(newValue) {
      this.$refs.modal[newValue ? "show" : "hide"]();
    },
  },
});
</script>
