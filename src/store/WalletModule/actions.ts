import { fetchTokens } from "./services";

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
    fetchTokens().then((tokens) => {
      commit("SET_TOKENS", tokens);
    });
  },
};
