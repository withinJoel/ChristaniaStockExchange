// ——— DATA ———
let holdings = [];
let portfolioData = null;

// ——— CHART DATA ———
function genWalk(n, start, end, vol) {
    const arr = [start];
    for (let i = 1; i < n - 1; i++) arr.push(+(arr[i - 1] + (Math.random() - 0.47) * vol).toFixed(2));
    arr.push(end);
    return arr;
}

function formatDate(d) {
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function generateLabels(period) {
    const end = new Date('2026-02-28');
    const labels = [];
    switch (period) {
        case '1d':
            for (let h = 9; h <= 15; h++) for (let m = 0; m < 60; m += 15) labels.push(`${h}:${m === 0 ? '00' : m}`);
            break;
        case '7d':
            for (let i = 6; i >= 0; i--) { const d = new Date(end); d.setDate(d.getDate() - i); labels.push(d.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short' })); }
            break;
        case '1m':
            for (let i = 29; i >= 0; i--) { const d = new Date(end); d.setDate(d.getDate() - i); labels.push(d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })); }
            break;
        case '1y':
            for (let i = 11; i >= 0; i--) { const d = new Date(end); d.setMonth(d.getMonth() - i); labels.push(d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' })); }
            break;
        case '3y': case '5y':
            const yrs = period === '3y' ? 3 : 5;
            for (let i = yrs * 4; i >= 0; i--) { const d = new Date(end); d.setMonth(d.getMonth() - i * 3); labels.push(d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' })); }
            break;
        case 'all':
            // Jan 2024 to Feb 2026 = 26 months
            for (let i = 25; i >= 0; i--) { const d = new Date(end); d.setMonth(d.getMonth() - i); labels.push(d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' })); }
            break;
    }
    return labels;
}

const periodConfigs = {
    '1d': { n: 25, start: 1830, end: 1847.32, vol: 3 },
    '7d': { n: 7, start: 1800, end: 1847.32, vol: 12 },
    '1m': { n: 30, start: 1760, end: 1847.32, vol: 15 },
    '1y': { n: 12, start: 1450, end: 1847.32, vol: 40 },
    '3y': { n: 13, start: 1100, end: 1847.32, vol: 60 },
    '5y': { n: 21, start: 1000, end: 1847.32, vol: 50 },
    'all': { n: 26, start: 1000, end: 1847.32, vol: 45 }
};

// ——— CHART ———
const ctx = document.getElementById('mainChart').getContext('2d');
let mainChart;

function createGradient() {
    const g = ctx.createLinearGradient(0, 0, 0, 320);
    g.addColorStop(0, 'rgba(255,46,99,0.2)');
    g.addColorStop(1, 'rgba(255,46,99,0)');
    return g;
}

function renderChart(period) {
    const cfg = periodConfigs[period];
    // Use portfolio info for current end value if we have it
    const endVal = portfolioData ? portfolioData.index.current : cfg.end;
    const data = genWalk(cfg.n, cfg.start, endVal, cfg.vol);
    const labels = generateLabels(period);

    if (mainChart) mainChart.destroy();
    mainChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                data,
                borderColor: '#FF2E63',
                borderWidth: 2,
                fill: true,
                backgroundColor: createGradient(),
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#FF2E63',
                pointHoverBorderColor: '#080810',
                pointHoverBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            onHover: (e, els) => {
                const hv = document.getElementById('hoverVal');
                const hd = document.getElementById('hoverDate');
                if (els.length > 0) {
                    const idx = els[0].index;
                    hv.textContent = data[idx].toLocaleString('en-IN', { minimumFractionDigits: 2 });
                    hd.textContent = labels[idx];
                    hv.style.opacity = '1';
                    hd.style.opacity = '1';
                } else {
                    hv.style.opacity = '0';
                    hd.style.opacity = '0';
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0d0d1a',
                    borderColor: 'rgba(255,46,99,0.3)',
                    borderWidth: 1,
                    titleColor: 'rgba(240,240,248,0.5)',
                    bodyColor: '#f0f0f8',
                    bodyFont: { family: 'JetBrains Mono', weight: '700', size: 14 },
                    titleFont: { family: 'JetBrains Mono', size: 10 },
                    callbacks: {
                        label: ctx => '₹' + ctx.parsed.y.toLocaleString('en-IN', { minimumFractionDigits: 2 })
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false },
                    ticks: { color: 'rgba(240,240,248,0.3)', font: { family: 'JetBrains Mono', size: 10 }, maxTicksLimit: 8 }
                },
                y: {
                    position: 'right',
                    grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false },
                    ticks: { color: 'rgba(240,240,248,0.3)', font: { family: 'JetBrains Mono', size: 10 }, callback: v => '₹' + v.toLocaleString() }
                }
            }
        }
    });
}

// Period buttons
document.querySelectorAll('.period-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderChart(btn.dataset.period);
    });
});

// ——— HOLDINGS CARDS ———
let currentSort = 'weight';
function sortHoldings(by) {
    currentSort = by;
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.sort-btn').forEach(b => { if (b.textContent.toLowerCase().includes(by.split('')[0])) b.classList.add('active'); });

    const sorted = [...holdings].sort((a, b) => {
        if (by === 'weight') return b.weightage - a.weightage;
        if (by === 'return') return ((b.currentPrice - b.avgPrice) / b.avgPrice) - ((a.currentPrice - a.avgPrice) / a.avgPrice);
        if (by === 'today') return b.dayChange - a.dayChange;
        return 0;
    });
    renderCards(sorted);
}

function renderCards(data) {
    const grid = document.getElementById('holdingsGrid');
    grid.innerHTML = '';
    data.forEach(h => {
        const ret = ((h.currentPrice - h.avgPrice) / h.avgPrice * 100).toFixed(2);
        const retPos = parseFloat(ret) >= 0;
        const dayPos = h.dayChange >= 0;
        const totalVal = (h.shares * h.currentPrice).toLocaleString('en-IN', { maximumFractionDigits: 0 });
        const pnl = ((h.currentPrice - h.avgPrice) * h.shares).toLocaleString('en-IN', { maximumFractionDigits: 0 });

        grid.innerHTML += `
      <div class="holding-card">
        <div class="hc-top">
          <div class="hc-ticker-wrap">
            <div class="hc-ticker">${h.ticker}</div>
            <div class="hc-name">${h.name}</div>
            <div class="hc-sector-badge">${h.sector}</div>
          </div>
          <div class="hc-price">
            <div class="hc-current">₹${h.currentPrice.toLocaleString()}</div>
            <div class="hc-change ${dayPos ? 'up' : 'dn'}">${dayPos ? '▲' : '▼'} ${Math.abs(h.dayChange)}% today</div>
          </div>
        </div>
        <div class="hc-divider"></div>
        <div class="hc-stats">
          <div>
            <div class="hc-stat-label">Shares Held</div>
            <div class="hc-stat-val">${h.shares}</div>
          </div>
          <div>
            <div class="hc-stat-label">Avg Buy</div>
            <div class="hc-stat-val">₹${h.avgPrice.toLocaleString()}</div>
          </div>
          <div>
            <div class="hc-stat-label">Market Value</div>
            <div class="hc-stat-val">₹${totalVal}</div>
          </div>
          <div>
            <div class="hc-stat-label">P&L</div>
            <div class="hc-stat-val ${retPos ? 'up' : 'dn'}">${retPos ? '+' : ''}₹${pnl}</div>
          </div>
        </div>
        <div class="hc-weight-bar">
          <div class="hc-weight-fill" style="width:${h.weightage}%"></div>
        </div>
        <div class="hc-weight-label">
          <span class="hc-weight-text">Portfolio Weight</span>
          <span class="hc-weight-text" style="color:${retPos ? 'var(--green)' : 'var(--pink)'}">
            ${retPos ? '+' : ''}${ret}% return
          </span>
        </div>
      </div>
    `;
    });
}

// Sort button fix
document.querySelectorAll('.sort-btn').forEach((btn, i) => {
    const maps = ['weight', 'return', 'today'];
    btn.addEventListener('click', () => {
        document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sortHoldings(maps[i]);
    });
});

async function loadDataAndRender() {
    try {
        const res = await fetch('data/portfolio.json');
        if (!res.ok) throw new Error('Data not found');
        portfolioData = await res.json();

        // Update top hero section
        if (portfolioData.index) {
            document.getElementById('bigVal').textContent = portfolioData.index.current.toLocaleString('en-IN', { minimumFractionDigits: 2 });
            const p = document.getElementById('bigPill');
            const chg = portfolioData.index.change;
            if (chg >= 0) {
                p.className = 'pill up';
                p.textContent = `▲ +${chg} (+${portfolioData.index.changePct}%)`;
            } else {
                p.className = 'pill dn';
                p.textContent = `▼ ${chg} (${portfolioData.index.changePct}%)`;
            }

            const stats = document.querySelectorAll('.explore-stat-val');
            if (stats.length >= 3) {
                stats[0].textContent = portfolioData.index.allTimeHigh.toLocaleString('en-IN', { minimumFractionDigits: 2 });
                stats[1].textContent = portfolioData.index.allTimeLow.toLocaleString('en-IN', { minimumFractionDigits: 2 });
                stats[2].textContent = `+${portfolioData.index.totalReturn}%`;
            }
        }

        holdings = portfolioData.holdings || [];
    } catch (e) {
        console.warn('Failed to fetch portfolio data via JSON', e);
    }

    // In case fetch failed or succeeded, render the content
    renderChart('1m');
    sortHoldings('weight');
}

loadDataAndRender();