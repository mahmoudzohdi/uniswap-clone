export default {
  openConnectWalletModal({ commit }) {
    commit("UPDATE_CONNECT_WALLET_MODAL_VISIBILITY", true);
  },
  closeConnectWalletModal({ commit }) {
    commit("UPDATE_CONNECT_WALLET_MODAL_VISIBILITY", false);
  },
  setAccounts({ commit }, accounts: string[]) {
    commit("SET_ACCOUNTS", accounts);
  },
  getTokens({ commit }) {
    fetch("https://www.gemini.com/uniswap/manifest.json")
      .then((res) => res.json())
      .then((res) => {
        commit("SET_TOKENS", res.tokens);
      });
  },
};
