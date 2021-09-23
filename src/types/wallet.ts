export interface WalletProviderItem {
  name: string;
  image: string;
  href?: string;
  onClick?: () => Promise<string>;
}

export interface Token {
  name: string;
  chainId: number;
  symbol: string;
  decimals: number;
  address: string;
  logoURI: string;
}
export interface TokensProvider {
  name: string;
  endpoint: string;
  logoURI: string;
  tokens: string[] | null;
  enabled: boolean;
}
