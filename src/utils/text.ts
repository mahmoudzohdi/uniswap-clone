export const truncate = (
  text: string,
  length: number,
  separator = "..."
): string => {
  if (text.length <= length) return text;

  separator = separator || "...";

  const frontChars = Math.ceil(length / 2);
  const backChars = Math.floor(length / 2);

  return (
    text.substr(0, frontChars) +
    separator +
    text.substr(text.length - backChars)
  );
};
