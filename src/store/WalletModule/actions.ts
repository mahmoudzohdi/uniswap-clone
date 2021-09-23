import { TokensProvider } from "@/types/wallet";
import { fetchTokens } from "./services";

export default {
  openConnectWalletModal({ commit }) {
    commit("UPDATE_CONNECT_WALLET_MODAL_VISIBILITY", true);
  },
  closeConnectWalletModal({ commit }) {
    commit("UPDATE_CONNECT_WALLET_MODAL_VISIBILITY", false);
  },
  openManageTokenListsModal({ commit }) {
    commit("UPDATE_MANAGE_TOKEN_LISTS_MODAL_VISIBILITY", true);
  },
  closeManageTokenListsModal({ commit }) {
    commit("UPDATE_MANAGE_TOKEN_LISTS_MODAL_VISIBILITY", false);
  },
  setAccounts({ commit }, accounts: string[]) {
    commit("SET_ACCOUNTS", accounts);
  },
  getTokens({ commit }) {
    fetchTokens().then((tokens) => {
      commit("SET_TOKENS", tokens);
    });
  },
  updateTokensProvider({ commit }, provider: TokensProvider) {
    commit("UPDATE_PROVIDER", provider);
  },
};
