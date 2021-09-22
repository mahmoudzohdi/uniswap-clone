export default () => ({
  connectWalletModal: {
    visibility: false,
  },
  accounts: [],
  tokens: {
    providers: [
      {
        name: "Gemini Token List",
        endpoint: "https://www.gemini.com/uniswap/manifest.json",
        tokens: null,
        enabled: true,
      },
      {
        name: "CoinGecko",
        endpoint: "https://tokens.coingecko.com/uniswap/all.json",
        tokens: null,
        enabled: false,
      },
      {
        name: "Kleros Tokens",
        endpoint:
          "https://cloudflare-ipfs.com/ipfs/QmTh9b6CqFNG1Uf33pGUoQSGZbS1tmLhn6RhaypSP7kjZ2/",
        tokens: null,
        enabled: false,
      },
    ],
    data: [],
    commonTokens: [],
  },
});
