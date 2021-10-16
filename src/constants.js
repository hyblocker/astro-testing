export const SITE_NAME = "Astro Test";
export const DOMAIN = "astro-testing.vercel.app";
export let DOCS_TREE = {};
export function addDoc(doc) {
    if (DOCS_TREE === undefined)
        DOCS_TREE = {};
    if (DOCS_TREE[doc.lang] === undefined)
        DOCS_TREE[doc.lang] = [];
    
    DOCS_TREE[doc.lang].push({
        text: doc.displayTitle,
        url: doc.path,
    });
    
    // unique values by url
    DOCS_TREE[doc.lang] = [...new Map(DOCS_TREE[doc.lang].map((item) => [item["url"], item])).values()];
}