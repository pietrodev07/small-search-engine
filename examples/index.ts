import { Document, createIndex, search } from "../src";

const documents: Document = {
  "1": "The search engine is basic but functional.",
  "2": "This project creates a search engine.",
  "3": "Learning how to build a search engine.",
};

const index = createIndex(documents);

console.log("[INDEX]");
console.dir(index, { depth: Infinity });

const query = "search engine";
const results = search(query, index);

console.log("\n[SEARCH RESULTS]");
console.dir(results, { depth: Infinity });

console.log("\n[SEARCH RESULTS FORMATTED]");

for (const [docId, score] of Object.entries(results)) {
  console.log(`Document ${docId} (score ${score}): ${documents[docId]}`);
}
