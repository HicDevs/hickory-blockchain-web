#!/usr/bin/env bash
set -euo pipefail

have() { command -v "$1" >/dev/null 2>&1; }
note() { printf "\n\033[1m%s\033[0m\n" "$1"; }
ok()   { printf "  ✅ %s\n" "$1"; }
bad()  { printf "  ❌ %s\n" "$1"; }

note "Prerequisites"
have rg && ok "ripgrep (rg) found" || { bad "ripgrep not found. Install: brew install ripgrep"; exit 1; }
have npm && ok "npm found" || { bad "npm not found"; exit 1; }

note "Building (Vite prod)"
npm run build >/dev/null 2>&1 && ok "build ok"

STATUS=0
note "Content consistency checks"

if rg -n "Tokenfactory" src/ >/dev/null; then bad "Found 'Tokenfactory' (should be 'TokenFactory')"; rg -n "Tokenfactory" src/; STATUS=1; else ok "TokenFactory capitalization clean"; fi
if rg -n "13,6" src/ >/dev/null; then bad "Found '13,6' (use '13.6')"; rg -n "13,6" src/; STATUS=1; else ok "Decimal style clean (13.6)"; fi

if rg -n "Total Supply: 100,000,000 HIC(?! Coins)" -U src/components/ >/dev/null; then
  bad "Total Supply line missing 'HIC Coins' in components"
  rg -n "Total Supply" src/components/
  STATUS=1
else
  ok "Total Supply wording looks good ('HIC Coins')"
fi

if rg -n "Dubai" src/ >/dev/null; then bad "Found 'Dubai' (use 'UAE')"; rg -n "Dubai" src/; STATUS=1; else ok "Roadmap uses 'UAE'"; fi
if rg -n "Treasury Expansion \\(UAE\\)" src/components/RoadmapSection.jsx >/dev/null; then ok "Roadmap has 'Treasury Expansion (UAE)'"; else bad "Missing 'Treasury Expansion (UAE)' in RoadmapSection.jsx"; STATUS=1; fi

if rg -n "HIC Token.*HIC Coin.*1:1" src/ >/dev/null; then ok "Migration copy present (Token → Coin 1:1)"; else bad "Add migration copy: 'HIC Token → HIC Coin (1:1) at mainnet launch'"; STATUS=1; fi

note "SEO checks (index.html)"
if rg -n "<title>" index.html >/dev/null; then ok "<title> present"; else bad "Missing <title> in index.html"; STATUS=1; fi
if rg -n 'meta name="description"' index.html >/dev/null; then ok "meta description present"; else bad "Missing meta description"; STATUS=1; fi
if rg -n 'property="og:' index.html >/dev/null; then ok "Open Graph tags present"; else bad "Missing Open Graph tags (og:title/description/image/url)"; STATUS=1; fi
if rg -n 'name="twitter:' index.html >/dev/null; then ok "Twitter Card tags present"; else bad "Missing Twitter Card tags (summary_large_image)"; STATUS=1; fi

note "Summary"
if [ "$STATUS" -eq 0 ]; then
  ok "All checks passed"
  exit 0
else
  bad "Some checks failed (see above)."
  exit 1
fi
