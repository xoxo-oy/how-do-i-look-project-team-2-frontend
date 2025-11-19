import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.join(__dirname, '../prisma/seed.js');

try {
  await import(pathToFileURL(seedPath).href);
} catch (error) {
  console.error('Seed runner failed:', error);
  process.exitCode = 1;
}
