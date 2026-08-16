#!/bin/bash
# Assembles the single-file M1 Pro Form Guide from parts/.
set -e
cd "$(dirname "$0")"

# Generate the glue that orders EXERCISES by roster order.
node -e '
const r = require("./roster.json");
const ids = r.exercises.map(e => JSON.stringify(e.id)).join(",\n  ");
const out = `// ===== ASSEMBLY: canonical exercise order (roster order) =====
const ROSTER_ORDER = [
  ${ids}
];
const EXERCISES = (() => {
  const parts = [].concat(EX_PART_0, EX_PART_1, EX_PART_2, EX_PART_3, EX_PART_4, EX_PART_5);
  const m = new Map(parts.map(e => [e.id, e]));
  return ROSTER_ORDER.map(id => m.get(id)).filter(Boolean);
})();
`;
require("fs").writeFileSync("glue.js", out);
'

build_html() {  # $1 = "single" | "pwa"
  cat head.html
  [ "$1" = "pwa" ] && cat pwa-head.html
  echo '<style>'
  cat styles.css
  echo '</style>'
  echo '</head>'
  cat body.html
  echo '<script>'
  cat docs.js
  cat data-0.js data-1.js data-2.js data-3.js data-4.js data-5.js
  cat glue.js
  cat data-standards.js
  cat anim.js
  cat app.js
  [ "$1" = "pwa" ] && cat pwa-boot.js
  echo '</script>'
  echo '</body>'
  echo '</html>'
}

OUT=../m1-pro-form-guide.html
build_html single > "$OUT"

# Hosted/installable build: same app + manifest, icons and offline worker.
PWA=../build/pwa
mkdir -p "$PWA"
build_html pwa > "$PWA/index.html"
cp manifest.webmanifest sw.js "$PWA/"
python3 mkicons.py > /dev/null

# Parallel pure-JS bundle for syntax checking.
cat docs.js data-0.js data-1.js data-2.js data-3.js data-4.js data-5.js glue.js data-standards.js anim.js app.js > /tmp/m1pfg-bundle.js
node --check /tmp/m1pfg-bundle.js && echo "JS syntax OK"
echo "Built $OUT ($(du -h "$OUT" | cut -f1))"
