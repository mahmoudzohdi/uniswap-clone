import { TokensProvider } from "@/types/wallet";

export default {
  allTokens(state): string[] {
    return state.manageTokenListsModal.providers.reduce(
      (tokens: string[], provider: TokensProvider) => {
        if (provider.enabled) return tokens.concat(provider.tokens);
        return tokens;
      },
      []
    );
  },
};
