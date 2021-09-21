import { Token } from "@/types/wallet";

export default {
  UPDATE_CONNECT_WALLET_MODAL_VISIBILITY(state, visibility: boolean): void {
    state.connectWalletModal.visibility = visibility;
  },
  SET_ACCOUNTS(state, accounts: string[]): void {
    state.accounts = accounts;
  },
  SET_TOKENS(state, tokens: Token[]): void {
    state.tokens = tokens;
  },
};
