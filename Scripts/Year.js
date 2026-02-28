// ——— EMBEDDED DATA (fallback since file:// can't fetch JSON) ———
const ALL_DATA = {
    2024: {
        year: 2024,
        subtitle: "inception year",
        summary: { totalSharesBought: 423, totalInvested: 485000, portfolioReturn: 14.2, dividendsReceived: 8420, bestPerformer: "ZOMATO", worstPerformer: "TATASTEEL", numberOfTransactions: 31, portfolioStartValue: 0, portfolioEndValue: 485000 },
        quarters: [
            { quarter: "Q1", label: "Jan — Mar 2024", dividends: 0, note: "Portfolio inception. Initial capital deployed.", sharesAdded: 165, invested: 198000, highlights: ["Portfolio launched with 5 core positions", "TCS added as anchor holding", "RELIANCE initial stake built"] },
            { quarter: "Q2", label: "Apr — Jun 2024", dividends: 1840, note: "First dividends received from RELIANCE.", sharesAdded: 102, invested: 142000, highlights: ["First dividend payout ₹1,840", "HDFCBANK added to portfolio", "Portfolio up 6.2% from inception"] },
            { quarter: "Q3", label: "Jul — Sep 2024", dividends: 2950, note: "Strong IT sector performance boosts portfolio.", sharesAdded: 89, invested: 98000, highlights: ["IT sector surge — TCS & INFY up 12%", "BAJFINANCE initiated", "Portfolio crosses ₹4L mark"] },
            { quarter: "Q4", label: "Oct — Dec 2024", dividends: 3630, note: "Year-end rebalancing. ZOMATO added.", sharesAdded: 67, invested: 47000, highlights: ["ZOMATO added at ₹110 avg", "Portfolio rebalanced — IT weight reduced", "Year closes at +14.2% return"] }
        ],
        monthlyEvents: [
            { month: "January", event: "Portfolio launched. ₹2L deployed across RELIANCE, TCS, INFY.", type: "buy", impact: "positive" },
            { month: "February", event: "Additional RELIANCE shares purchased on dip.", type: "buy", impact: "positive" },
            { month: "March", event: "WIPRO added. IT sector gaining momentum.", type: "buy", impact: "positive" },
            { month: "April", event: "First dividend from RELIANCE received — ₹1,840.", type: "dividend", impact: "positive" },
            { month: "May", event: "General election results — market volatile. Held positions.", type: "watchlist", impact: "neutral" },
            { month: "June", event: "Post-election rally. Portfolio up 8% from inception.", type: "milestone", impact: "positive" },
            { month: "July", event: "HDFCBANK added. Banking sector undervalued.", type: "buy", impact: "positive" },
            { month: "August", event: "Global selloff — Nikkei crash ripples to NSE. Bought the dip on TCS.", type: "buy", impact: "positive" },
            { month: "September", event: "BAJFINANCE initiated. Strong NBFC thesis.", type: "buy", impact: "positive" },
            { month: "October", event: "Q2 results season. TCS beats estimates — strong buy signal.", type: "watchlist", impact: "positive" },
            { month: "November", event: "US elections — global markets rally. Portfolio gains ₹40K in a week.", type: "milestone", impact: "positive" },
            { month: "December", event: "ZOMATO added at ₹110. Year-end rebalancing completed.", type: "buy", impact: "positive" }
        ],
        topMoments: [
            { icon: "🚀", title: "Portfolio Launch", desc: "CSE went live in January 2024 with ₹2L seed capital." },
            { icon: "💰", title: "First Dividend", desc: "₹1,840 from RELIANCE — the first passive income hit." },
            { icon: "📈", title: "Post-election Rally", desc: "Portfolio surged 8% in a single week post June results." },
            { icon: "⚡", title: "Aug Dip Mastery", desc: "Bought TCS during global panic. Paid off by September." }
        ]
    },
    2025: {
        year: 2025,
        subtitle: "growth year",
        summary: { totalSharesBought: 142, totalInvested: 127400, portfolioReturn: 11.8, dividendsReceived: 12650, bestPerformer: "BAJFINANCE", worstPerformer: "TATASTEEL", numberOfTransactions: 18, portfolioStartValue: 485000, portfolioEndValue: 582300 },
        quarters: [
            { quarter: "Q1", label: "Jan — Mar 2025", dividends: 84.5, note: "New year, new capital. TATASTEEL added on metals thesis.", sharesAdded: 60, invested: 42000, highlights: ["TATASTEEL 180 shares initiated", "RELIANCE dividend — ₹2,100", "Portfolio up 4.1% YTD"] },
            { quarter: "Q2", label: "Apr — Jun 2025", dividends: 550.35, note: "Strong quarter. IT earnings surprise on the upside.", sharesAdded: 45, invested: 52000, highlights: ["Best quarter of 2025 — +7.3% single quarter", "TCS & INFY dividends received", "Portfolio crosses ₹6L valuation milestone"] },
            { quarter: "Q3", label: "Jul — Sep 2025", dividends: 70.4, note: "Consolidation phase. No new positions.", sharesAdded: 22, invested: 21400, highlights: ["Averaging down WIPRO at ₹580", "BAJFINANCE strong — up 18% YTD", "Monsoon rally lifts consumer stocks"] },
            { quarter: "Q4", label: "Oct — Dec 2025", dividends: 389, note: "Year-end review. Portfolio at all-time high.", sharesAdded: 15, invested: 12000, highlights: ["Portfolio hits ATH — ₹6.2L", "Year closes at +11.8% return", "Dividend income ₹12,650 for the year"] }
        ],
        monthlyEvents: [
            { month: "January", event: "Includes compensation for the 5 unused leave days for the year 2024. (5 * 833)", type: "buy", impact: "positive" },
            { month: "February", event: "Includes money from my mother (~2,000) and from my father (~500)  for the 2 day program at Darza Resorts, Coimbatore. Which was company sponsored.", type: "watchlist", impact: "neutral" },
            { month: "March", event: "Includes the bonus amount of (12,500).", type: "dividend", impact: "positive" },
            { month: "April", event: "Preparation for my papa as he was leaving to Dubai.", type: "milestone", impact: "positive" },
            { month: "May", event: "Added INFY on post-earnings dip — best price of the year.", type: "buy", impact: "positive" },
            { month: "June", event: "Portfolio crosses ₹6L. Celebrated with a coffee ☕", type: "milestone", impact: "positive" },
            { month: "July", event: "Averaged down WIPRO — thesis still intact.", type: "buy", impact: "neutral" },
            { month: "August", event: "BAJFINANCE announces QIP — stock dips 5%, bought more.", type: "buy", impact: "positive" },
            { month: "September", event: "Fed holds rates. FII inflows surge into Indian markets.", type: "milestone", impact: "positive" },
            { month: "October", event: "Festive season — consumer & retail stocks surge.", type: "watchlist", impact: "positive" },
            { month: "November", event: "ZOMATO profitability confirmed — stock up 22% in the month.", type: "milestone", impact: "positive" },
            { month: "December", event: "Portfolio at all-time high. Year ends +11.8%. Log filed.", type: "milestone", impact: "positive" }
        ],
        topMoments: [
            { icon: "💎", title: "₹6L Milestone", desc: "Portfolio crossed ₹6 Lakhs valuation in June 2025." },
            { icon: "📊", title: "Best IT Quarter", desc: "Q2 2025 — IT sector delivered a 7.3% single quarter gain." },
            { icon: "🏆", title: "ATH Reached", desc: "Portfolio hit all-time high of ₹6.2L in December." },
            { icon: "💸", title: "₹12,650 Dividends", desc: "Passive income from dividends alone crossed ₹12K for the year." }
        ]
    }
};

// ——— GET YEAR FROM URL ———
const params = new URLSearchParams(window.location.search);
const yearParam = parseInt(params.get('year')) || 2024;
const data = ALL_DATA[yearParam];

// ——— RENDER ———
function render(d) {
    const page = document.getElementById('pageContent');

    // total dividends
    const totalDiv = d.quarters.reduce((s, q) => s + q.dividends, 0);

    page.innerHTML = `
    <!-- HERO -->
    <div class="year-hero animate-up">
      <div class="year-hero-bg"></div>
      <div class="year-num-bg">${d.year}</div>
      <div class="year-hero-content">
        <div class="breadcrumb">
          <a href="index.html">Home</a>
          <span class="breadcrumb-sep">/</span>
          <a href="history.html">History</a>
          <span class="breadcrumb-sep">/</span>
          <span style="color:var(--text)">${d.year}</span>
        </div>
        <div class="section-eyebrow">// annual chronicle</div>
        <div class="year-display">${d.year}</div>
        <div class="year-subtitle">${d.subtitle || 'annual record'}</div>
        <div class="year-hero-stats">
          <div class="yhs-item">
            <div class="yhs-label">Annual Return</div>
            <div class="yhs-val" style="color:${d.summary.portfolioReturn >= 0 ? 'var(--green)' : 'var(--pink)'}">
              ${d.summary.portfolioReturn >= 0 ? '+' : ''}${d.summary.portfolioReturn}%
            </div>
          </div>
          <div class="yhs-item">
            <div class="yhs-label">Total Invested</div>
            <div class="yhs-val">₹${(d.summary.totalInvested / 100000).toFixed(2)}L</div>
          </div>
          <div class="yhs-item">
            <div class="yhs-label">Dividends</div>
            <div class="yhs-val">₹${totalDiv.toLocaleString()}</div>
          </div>
          <div class="yhs-item">
            <div class="yhs-label">Shares Added</div>
            <div class="yhs-val">${d.summary.totalSharesBought}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ANNUAL SUMMARY -->
    <div class="content-section animate-up-1">
      <div class="section-eyebrow">// annual overview</div>
      <h2 class="section-title" style="font-size:1.8rem">Year Summary</h2>
      <div class="accent-line" style="margin-top:0.8rem"></div>
      <div class="summary-card">
        <div class="summary-grid">
          <div class="sg-item">
            <div class="sg-label">Shares Bought</div>
            <div class="sg-val">${d.summary.totalSharesBought}</div>
            <div class="sg-sub">across ${d.summary.numberOfTransactions} transactions</div>
          </div>
          <div class="sg-item">
            <div class="sg-label">Best Performer</div>
            <div class="sg-val" style="color:var(--green)">${d.summary.bestPerformer}</div>
            <div class="sg-sub">top gainer of the year</div>
          </div>
          <div class="sg-item">
            <div class="sg-label">Worst Performer</div>
            <div class="sg-val" style="color:var(--pink)">${d.summary.worstPerformer}</div>
            <div class="sg-sub">laggard of the year</div>
          </div>
          <div class="sg-item">
            <div class="sg-label">Dividends Received</div>
            <div class="sg-val" style="color:var(--gold)">₹${d.summary.dividendsReceived.toLocaleString()}</div>
            <div class="sg-sub">passive income earned</div>
          </div>
          <div class="sg-item">
            <div class="sg-label">Year Start Value</div>
            <div class="sg-val">₹${d.summary.portfolioStartValue === 0 ? '—' : (d.summary.portfolioStartValue / 100000).toFixed(2) + 'L'}</div>
            <div class="sg-sub">${d.summary.portfolioStartValue === 0 ? 'inception year' : 'opening value'}</div>
          </div>
          <div class="sg-item">
            <div class="sg-label">Year End Value</div>
            <div class="sg-val">₹${(d.summary.portfolioEndValue / 100000).toFixed(2)}L</div>
            <div class="sg-sub">closing value</div>
          </div>
        </div>
      </div>
    </div>

    <!-- QUARTERS -->
    <div class="content-section animate-up-2">
      <div class="section-eyebrow">// quarterly breakdown</div>
      <h2 class="section-title" style="font-size:1.8rem">Dividends & Activity</h2>
      <div class="accent-line" style="margin-top:0.8rem"></div>
      <div class="quarters-grid">
        ${d.quarters.map(q => `
          <div class="quarter-card">
            <div class="qc-header">
              <div>
                <div class="qc-quarter">${q.quarter}</div>
                <div class="qc-period">${q.label}</div>
              </div>
              <div style="text-align:right">
                <div style="font-family:'JetBrains Mono',monospace;font-weight:700;font-size:1.1rem;color:var(--gold)">
                  ${q.dividends > 0 ? '₹' + q.dividends.toLocaleString() : '—'}
                </div>
                <div style="font-size:0.6rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dimmer)">
                  dividends
                </div>
              </div>
            </div>
            <div class="qc-body">
              <div class="qc-stats">
                <div>
                  <div class="qc-stat-label">Shares Added</div>
                  <div class="qc-stat-val">${q.sharesAdded}</div>
                </div>
                <div>
                  <div class="qc-stat-label">Capital Deployed</div>
                  <div class="qc-stat-val">₹${(q.invested / 1000).toFixed(0)}K</div>
                </div>
                <div>
                  <div class="qc-stat-label">Dividends</div>
                  <div class="qc-stat-val" style="color:var(--gold)">${q.dividends > 0 ? '₹' + q.dividends.toLocaleString() : 'NIL'}</div>
                </div>
              </div>
              <div class="qc-note">"${q.note}"</div>
              <div class="qc-highlights">
                ${q.highlights.map(h => `<div class="qc-hl">${h}</div>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <!-- Dividend Chart -->
      <div style="margin-top:1.5rem;background:var(--bg2);border:1px solid var(--border);padding:1.5rem;">
        <div style="font-size:0.65rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-dimmer);margin-bottom:1rem">Quarterly Dividend Flow</div>
        <canvas id="divChart" height="80"></canvas>
      </div>
    </div>

    <!-- MONTHLY EVENTS -->
    <div class="content-section animate-up-3">
      <div class="section-eyebrow">// month by month</div>
      <h2 class="section-title" style="font-size:1.8rem">Major Events</h2>
      <div class="accent-line" style="margin-top:0.8rem"></div>
      <div class="events-timeline">
        ${d.monthlyEvents.map(ev => `
          <div class="event-row ${ev.impact}">
            <div class="event-month">${ev.month.slice(0, 3)}</div>
            <div class="event-dot"></div>
            <div class="event-content">
              <div class="event-type ${ev.type}">${ev.type}</div>
              <div class="event-text">${ev.event}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TOP MOMENTS -->
    <div class="content-section animate-up-4">
      <div class="section-eyebrow">// defining moments</div>
      <h2 class="section-title" style="font-size:1.8rem">Year Highlights</h2>
      <div class="accent-line" style="margin-top:0.8rem"></div>
      <div class="moments-grid">
        ${d.topMoments.map(m => `
          <div class="moment-card">
            <div class="moment-icon">${m.icon}</div>
            <div>
              <div class="moment-title">${m.title}</div>
              <div class="moment-desc">${m.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- NAV BETWEEN YEARS -->
    <div style="padding:2rem 2.5rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border)">
      <a href="history.html" class="btn-ghost">← All Years</a>
      <div style="display:flex;gap:1rem">
        ${yearParam > 2024 ? `<a href="year.html?year=${yearParam - 1}" class="btn-ghost">← ${yearParam - 1}</a>` : ''}
        ${ALL_DATA[yearParam + 1] ? `<a href="year.html?year=${yearParam + 1}" class="btn-pink">${yearParam + 1} →</a>` : ''}
      </div>
    </div>
  `;

    // Dividend Chart
    setTimeout(() => {
        const dCtx = document.getElementById('divChart');
        if (!dCtx) return;
        new Chart(dCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: d.quarters.map(q => q.quarter),
                datasets: [{
                    label: 'Dividends (₹)',
                    data: d.quarters.map(q => q.dividends),
                    backgroundColor: 'rgba(255,215,0,0.15)',
                    borderColor: '#ffd700',
                    borderWidth: 1,
                    borderRadius: 2
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: 'rgba(240,240,248,0.5)', font: { family: 'JetBrains Mono', size: 11 } } },
                    y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: 'rgba(240,240,248,0.5)', font: { family: 'JetBrains Mono', size: 10 }, callback: v => '₹' + v.toLocaleString() } }
                }
            }
        });
    }, 100);
}

if (data) {
    render(data);
} else {
    document.getElementById('pageContent').innerHTML = `
    <div style="padding:6rem 2.5rem;text-align:center">
      <div class="section-eyebrow">// not found</div>
      <h1 class="section-title">No Data for ${yearParam}</h1>
      <p style="color:var(--text-dim);margin-top:1rem">This year hasn't been chronicled yet.</p>
      <a href="history.html" class="btn-pink" style="margin-top:2rem;display:inline-flex">← Back to History</a>
    </div>
  `;
}