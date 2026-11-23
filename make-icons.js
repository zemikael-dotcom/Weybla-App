const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const SRC = 'icon-source.png';
const RES = process.argv[2] || 'android/app/src/main/res';
const BLACK = { r: 0, g: 0, b: 0, alpha: 1 };
const legacy = { mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };
const foreground = { mdpi: 108, hdpi: 162, xhdpi: 216, xxhdpi: 324, xxxhdpi: 432 };
(async () => {
  for (const d of Object.keys(legacy)) {
    const dir = path.join(RES, 'mipmap-' + d);
    fs.mkdirSync(dir, { recursive: true });
    const s = legacy[d];
    const sq = await sharp(SRC).resize(s, s).png().toBuffer();
    fs.writeFileSync(path.join(dir, 'ic_launcher.png'), sq);
    const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}"><circle cx="${s/2}" cy="${s/2}" r="${s/2}"/></svg>`);
    await sharp(sq).composite([{ input: mask, blend: 'dest-in' }]).png().toFile(path.join(dir, 'ic_launcher_round.png'));
    const f = foreground[d];
    const inner = Math.round(f * 0.72);
    const em = await sharp(SRC).resize(inner, inner).png().toBuffer();
    await sharp({ create: { width: f, height: f, channels: 4, background: BLACK } })
      .composite([{ input: em, gravity: 'center' }]).png().toFile(path.join(dir, 'ic_launcher_foreground.png'));
  }
  const vdir = path.join(RES, 'values');
  fs.mkdirSync(vdir, { recursive: true });
  fs.writeFileSync(path.join(vdir, 'ic_launcher_background.xml'), '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#000000</color>\n</resources>\n');
  console.log('Icons done');
})();
