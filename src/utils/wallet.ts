import MetaMaskOnboarding from "@metamask/onboarding";

export const connectMetaMask = (): Promise<string[]> => {
  const metaMaskOnboarding = new MetaMaskOnboarding();
  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    return window["ethereum"].request({ method: "eth_requestAccounts" });
  } else {
    metaMaskOnboarding.startOnboarding();
    return Promise.resolve([]);
  }
};

export const getWalletAccounts = (): Promise<string[]> => {
  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    console.log("connected? ", window["ethereum"].isConnected());
    return window["ethereum"].request({ method: "eth_requestAccounts" });
  }
  return Promise.resolve([]);
};
