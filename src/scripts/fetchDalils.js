// src/scripts/fetchDalils.js
const API_URL = 'https://ks.valocg.xyz/wp-json/api/dalil';

async function fetchDalils() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch articles');
    }
    return response.json();
}

export default fetchDalils;