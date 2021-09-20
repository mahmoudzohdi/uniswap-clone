export default {
  openConnectWalletModal({ commit }) {
    commit("UPDATE_CONNECT_WALLET_MODAL_VISIBILITY", true);
  },
  closeConnectWalletModal({ commit }) {
    commit("UPDATE_CONNECT_WALLET_MODAL_VISIBILITY", false);
  },
};
