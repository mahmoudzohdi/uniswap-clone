import { Token } from "@/types/wallet";

export const fetchTokens = (): Promise<Token[]> => {
  return fetch("https://www.gemini.com/uniswap/manifest.json")
    .then((res) => res.json())
    .then((res) => {
      return res.tokens;
    });
};
