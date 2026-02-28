// ——— GET YEAR FROM URL ———
const params = new URLSearchParams(window.location.search);
const yearParam = parseInt(params.get('year')) || 2024;

async function loadDataAndRender() {
    try {
        const response = await fetch(`data/${yearParam}.json`);
        if (!response.ok) throw new Error('Not found');
        const data = await response.json();

        let hasNextYear = false;
        try {
            const nextResp = await fetch(`data/${yearParam + 1}.json`, { method: 'HEAD' });
            hasNextYear = nextResp.ok;
        } catch (e) { /* ignore */ }

        render(data, hasNextYear);
    } catch (e) {
        document.getElementById('pageContent').innerHTML = `
        <div style="padding:6rem 2.5rem;text-align:center">
          <div class="section-eyebrow">// not found</div>
          <h1 class="section-title">No Data for ${yearParam}</h1>
          <p style="color:var(--text-dim);margin-top:1rem">This year hasn't been chronicled yet.</p>
          <a href="history.html" class="btn-pink" style="margin-top:2rem;display:inline-flex">← Back to History</a>
        </div>
      `;
    }
}

// ——— RENDER ———
function render(d, hasNextYear) {
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
        ${hasNextYear ? `<a href="year.html?year=${yearParam + 1}" class="btn-pink">${yearParam + 1} →</a>` : ''}
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

loadDataAndRender();