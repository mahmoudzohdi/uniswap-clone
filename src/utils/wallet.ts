import MetaMaskOnboarding from "@metamask/onboarding";

export const connectMetaMask = (): Promise<string | null> => {
  const metaMaskOnboarding = new MetaMaskOnboarding();
  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    return window["ethereum"].selectedAddress
      ? Promise.resolve(window["ethereum"].selectedAddress)
      : window["ethereum"]
          .request({ method: "eth_requestAccounts" })
          .then((res) => res[0]);
  } else {
    metaMaskOnboarding.startOnboarding();
    return Promise.resolve(null);
  }
};

export const getWalletAccounts = (): Promise<string[]> => {
  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    return window["ethereum"].request({ method: "eth_requestAccounts" });
  }
  return Promise.resolve([]);
};
