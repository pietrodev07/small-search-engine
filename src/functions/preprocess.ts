import { stopwords } from "../constants/stopwords";

export const preprocess = (text: string) => {
  const textLowerCase = text.toLowerCase();
  const sanitizedText = textLowerCase.replace(/\W+/g, " ");
  const words = sanitizedText.split(/\s+/);

  return words.filter((word) => {
    return word && !stopwords.includes(word);
  });
};
