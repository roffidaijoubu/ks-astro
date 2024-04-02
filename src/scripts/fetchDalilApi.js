import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

async function fetchDalilApi() {
  const response = await fetch('https://admin.mediakautsar.com/wp-json/api/dalil');
  const data = await response.json();
  
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(dirname, '../../public/api/dalil.json');
  
  // Ensure the directory exists
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  
  await fs.writeFile(filePath, JSON.stringify(data));
}

fetchDalilApi().catch(console.error);