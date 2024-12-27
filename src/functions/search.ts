import { Index, Result } from "../types";
import { preprocess } from "./preprocess";

export const search = (query: string, index: Index) => {
  const queryWords = preprocess(query);
  const results: Result = {};

  for (const word of queryWords) {
    const documentIds = index[word] || [];

    for (const documentId of documentIds) {
      if (!results[documentId]) {
        results[documentId] = 0;
      }

      results[documentId] += 1;
    }
  }

  return results;
};
