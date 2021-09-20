<template>
  <AppModal ref="modal" title="Connect to a wallet" @onHide="onHide">
    Hello
  </AppModal>
</template>

<script>
import { defineComponent } from "vue";
import AppModal from "@/components/core/Modal.vue";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("WalletModule");

export default defineComponent({
  name: "ConnectWalletModal",
  components: {
    AppModal,
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
