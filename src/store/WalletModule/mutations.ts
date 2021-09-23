import { Token, TokensProvider } from "@/types/wallet";

export default {
  UPDATE_CONNECT_WALLET_MODAL_VISIBILITY(state, visibility: boolean): void {
    state.connectWalletModal.visibility = visibility;
  },
  UPDATE_MANAGE_TOKEN_LISTS_MODAL_VISIBILITY(state, visibility: boolean): void {
    state.manageTokenListsModal.visibility = visibility;
  },
  SET_ACCOUNT_ADDRESS(state, accountAddress: string): void {
    state.accountAddress = accountAddress;
  },
  SET_TOKENS(state, tokens: Token[]): void {
    state.tokens = tokens;
    state.commonTokens = tokens.slice(0, 6); // just a mocking the common tokens
  },
  UPDATE_PROVIDER(state, provider: TokensProvider) {
    state.manageTokenListsModal.providers = state.manageTokenListsModal.providers.map(
      (_provider: TokensProvider) => {
        return _provider.name === provider.name ? provider : _provider;
      }
    );
  },
};
