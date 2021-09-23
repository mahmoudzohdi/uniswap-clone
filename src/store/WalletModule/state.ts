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
        tokens: [],
        enabled: true,
      },
      {
        name: "Compound",
        endpoint:
          "https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json",
        logoURI:
          "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/compound-interface.svg",
        tokens: [],
        enabled: false,
      },
      {
        name: "CMC Stablecoin",
        endpoint:
          "https://cloudflare-ipfs.com/ipfs/QmeopjrU4LAw8bDf8CfajU3smyxfy4AW9vtfASaSw3W7Ha/",
        logoURI:
          "https://cloudflare-ipfs.com/ipfs/QmQAGtNJ2rSGpnP6dh6PPKNSmZL8RTZXmgFwgTdy5Nz5mx/",
        tokens: [],
        enabled: false,
      },
    ],
  },
});
