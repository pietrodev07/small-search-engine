import { preprocess } from "./preprocess";
import { Document, Index } from "../types";

export const createIndex = (documents: Document) => {
  const index: Index = {};

  for (const documentId in documents) {
    const content = documents[documentId];
    const words = preprocess(content);

    for (const word of words) {
      if (!index[word]) {
        index[word] = [];
      }

      if (!index[word].includes(documentId)) {
        index[word].push(documentId);
      }
    }
  }

  return index;
};
