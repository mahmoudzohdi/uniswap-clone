import { Token } from "@/types/wallet";

export const fetchTokens = (endpoint: string): Promise<Token[]> => {
  return fetch(endpoint)
    .then((res) => res.json())
    .then((res) => {
      return res.tokens;
    });
};
