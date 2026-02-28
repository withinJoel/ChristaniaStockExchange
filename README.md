# Christania Stock Exchange
*A private portfolio tracker — classy but wild.*
Made with 💖 by Joel Jolly.

## 🚀 About
CSE (Christania Stock Exchange) is a personal portfolio intelligence platform that tracks every share, every rupee, every chapter of an investment journey. It's not just a tracker — it's an archive.

## 🔧 Tech Stack
- Vanilla HTML, CSS, JavaScript
- Chart.js for data visualisation
- Google Fonts — Inter (900 weight) + Playfair Display (italic)
- JetBrains Mono for financial data

## ✨ Features
- **Index Page** — Portfolio overview, live ticker tape, stats at a glance, holdings snapshot, sector breakdown
- **Explore Page** — Full interactive chart with 1D/7D/1M/1Y/3Y/5Y/All Time periods, sortable holdings cards with P&L
- **History Page** — Year-by-year archive with overview stats
- **Year Pages** — Quarterly dividends, monthly major events, top moments, annual summary, dividend chart (year.html?year=2024)

## 📦 File Structure
```
cse/
├── index.html        → Home / Index
├── explore.html      → Chart + Holdings
├── history.html      → Year selector
├── year.html         → Year detail (uses ?year=YYYY param)
├── css/style.css     → Shared design system
└── data/
    ├── portfolio.json → Holdings data
    ├── 2024.json      → 2024 annual data
    └── 2025.json      → 2025 annual data
```

## 🎨 Design Language
**Brand**: Classy But Wild  
**Signature Color**: Pure Pink `#FF2E63`  
**Typography**: Inter 900 + Playfair Display italic  
**Aesthetic**: Dark, noise-textured, grid-backed with pink glow accents  

## 🖥️ Website
Open `index.html` in your browser. No build step required.

## 🔧 Updating Data
Edit `data/portfolio.json` to update holdings.  
Add new year files as `data/YYYY.json` and register them in `year.html`'s `ALL_DATA` object.

## 🤝 Contributing
Want to improve CSE? PRs are welcome!

## ☕ Support
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-orange?style=for-the-badge&logo=buy-me-a-coffee)](https://www.buymeacoffee.com/withinjoel)

---
Made with 💖 by Joel Jolly · [@withinjoel](https://github.com/withinjoel)
