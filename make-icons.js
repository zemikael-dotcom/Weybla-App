const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const RES = process.argv[2] || 'android/app/src/main/res';
const defs = `<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7C3AED"/><stop offset="1" stop-color="#2E1065"/></linearGradient>
<linearGradient id="w" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#FDE68A"/></linearGradient>
<radialGradient id="glow" cx="0.3" cy="0.2" r="0.8"><stop offset="0" stop-color="#C4B5FD" stop-opacity="0.55"/><stop offset="1" stop-color="#C4B5FD" stop-opacity="0"/></radialGradient>
<filter id="sh" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#1E0B4B" flood-opacity="0.55"/></filter>
</defs>`;
const w = `<g filter="url(#sh)"><polyline points="228,318 362,716 512,420 662,716 796,318" fill="none" stroke="url(#w)" stroke-width="104" stroke-linecap="round" stroke-linejoin="round"/></g>`;
const bg = `<rect width="1024" height="1024" fill="url(#bg)"/><rect width="1024" height="1024" fill="url(#glow)"/>`;
const svg = (body) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">${defs}${body}</svg>`);
const full = svg(bg + w);
const fg = svg(w);
const circle = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"><circle cx="512" cy="512" r="512"/></svg>');
const legacy = { mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };
const foreground = { mdpi: 108, hdpi: 162, xhdpi: 216, xxhdpi: 324, xxxhdpi: 432 };
(async () => {
  for (const d of Object.keys(legacy)) {
    const dir = path.join(RES, 'mipmap-' + d);
    fs.mkdirSync(dir, { recursive: true });
    const s = legacy[d];
    await sharp(full).resize(s, s).png().toFile(path.join(dir, 'ic_launcher.png'));
    const sq = await sharp(full).resize(s, s).png().toBuffer();
    await sharp(sq).composite([{ input: await sharp(circle).resize(s, s).png().toBuffer(), blend: 'dest-in' }]).png().toFile(path.join(dir, 'ic_launcher_round.png'));
    const f = foreground[d];
    await sharp(fg).resize(f, f).png().toFile(path.join(dir, 'ic_launcher_foreground.png'));
  }
  const vdir = path.join(RES, 'values');
  fs.mkdirSync(vdir, { recursive: true });
  fs.writeFileSync(path.join(vdir, 'ic_launcher_background.xml'), '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#4C1D95</color>\n</resources>\n');
  console.log('Icons done');
})();
