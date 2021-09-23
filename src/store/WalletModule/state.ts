export default () => ({
  connectWalletModal: {
    visibility: false,
  },
  accountAddress: null,
  manageTokenListsModal: {
    visibility: false,
    providers: [
      {
        name: "Gemini Token List",
        endpoint: "https://www.gemini.com/uniswap/manifest.json",
        logoURI: "https://gemini.com/static/images/loader.png",
        tokens: null,
        enabled: true,
      },
      {
        name: "CoinGecko",
        endpoint: "https://tokens.coingecko.com/uniswap/all.json",
        logoURI:
          "https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png",
        tokens: null,
        enabled: false,
      },
      {
        name: "Kleros Tokens",
        endpoint:
          "https://cloudflare-ipfs.com/ipfs/QmTh9b6CqFNG1Uf33pGUoQSGZbS1tmLhn6RhaypSP7kjZ2/",
        logoURI:
          "https://cloudflare-ipfs.com/ipfs/QmRYXpD8X4sQZwA1E4SJvEjVZpEK1WtSrTqzTWvGpZVDwa/",
        tokens: null,
        enabled: false,
      },
    ],
  },
  tokens: [],
  commonTokens: [],
});
