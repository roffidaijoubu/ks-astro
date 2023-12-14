// src/scripts/fetchArticles.js
const API_URL = 'https://ks.valocg.xyz/wp-json/api/articles';

async function fetchArticles() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch articles');
    }
    return response.json();
}

export default fetchArticles;
