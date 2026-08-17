// Generates public/og.png (1200x630) from an inline SVG using sharp.
// Fonts fall back to system Helvetica/Menlo since librsvg cannot load woff2;
// layout and tokens match the site design.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <g stroke="#232328" stroke-width="1" opacity="0.5">
    ${Array.from({ length: 28 }, (_, i) => `<line x1="${i * 44}" y1="0" x2="${i * 44}" y2="630"/>`).join('')}
    ${Array.from({ length: 15 }, (_, i) => `<line x1="0" y1="${i * 44}" x2="1200" y2="${i * 44}"/>`).join('')}
  </g>
  <rect width="1200" height="630" fill="url(#fade)"/>
  <defs>
    <radialGradient id="fade" cx="0.5" cy="0.4" r="0.9">
      <stop offset="0.3" stop-color="#0a0a0a" stop-opacity="0"/>
      <stop offset="1" stop-color="#0a0a0a" stop-opacity="0.9"/>
    </radialGradient>
  </defs>
  <text x="96" y="238" font-family="Menlo, monospace" font-size="26" fill="#bef264">$ curl https://api.cimar.dev/v1/me</text>
  <text x="96" y="340" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="#ededed" letter-spacing="-2">Cimar Rodrigo Morales</text>
  <text x="96" y="404" font-family="Menlo, monospace" font-size="34" font-weight="500" fill="#bef264">Backend Developer</text>
  <text x="96" y="480" font-family="Menlo, monospace" font-size="22" fill="#9d9da6">La Paz, Bolivia · Go · Java · hexagonal architecture</text>
  <circle cx="104" cy="540" r="7" fill="#bef264"/>
  <text x="124" y="547" font-family="Menlo, monospace" font-size="20" fill="#9d9da6">open_to_work: true</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(root, 'public', 'og.png'));
console.log('public/og.png written (1200x630)');
