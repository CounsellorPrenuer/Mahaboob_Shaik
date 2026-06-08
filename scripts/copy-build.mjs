import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(__dirname, '..');
const rootDir = siteDir;
const outDir = path.resolve(siteDir, 'out');

// Clean up old files in the root that were copied from the build
const filesToClean = [
  '404.html',
  '404',
  '_next',
  '_not-found',
  '.nojekyll',
  'favicon.ico',
  'file.svg',
  'globe.svg',
  'index.html',
  'index.txt',
  'next.svg',
  'vercel.svg',
  'window.svg',
  'source-media',
  '__next.__PAGE__.txt',
  '__next._full.txt',
  '__next._head.txt',
  '__next._index.txt',
  '__next._tree.txt',
];

console.log('Cleaning up old build files in root...');
for (const file of filesToClean) {
  const targetPath = path.join(rootDir, file);
  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
}

console.log('Copying build files from site/out to root...');
if (fs.existsSync(outDir)) {
  fs.cpSync(outDir, rootDir, { recursive: true });
  console.log('Build files copied successfully!');
} else {
  console.error('Error: site/out directory not found!');
  process.exit(1);
}
