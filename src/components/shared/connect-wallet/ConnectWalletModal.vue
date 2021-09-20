<template>
  <AppModal ref="modal" title="Connect to a wallet" @onHide="onHide">
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
  </AppModal>
</template>

<script>
import { defineComponent } from "vue";
import AppModal from "@/components/core/Modal.vue";
import Info from "@/components/core/Info.vue";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("WalletModule");

export default defineComponent({
  name: "ConnectWalletModal",
  components: {
    AppModal,
    Info,
  },
  computed: {
    ...mapState({
      modalVisibility: (state) => state.connectWalletModal.visibility,
    }),
  },
  methods: {
    ...mapActions(["openConnectWalletModal", "closeConnectWalletModal"]),
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
