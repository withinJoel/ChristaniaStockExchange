// ——— DATA ———
        const portfolio = {
            holdings: [
                { ticker: "RELIANCE", name: "Reliance Industries", sector: "Energy", shares: 42, avgPrice: 2840.50, currentPrice: 3120.75, weightage: 21.2, dayChange: 0.85 },
                { ticker: "TCS", name: "Tata Consultancy Services", sector: "IT Services", shares: 28, avgPrice: 3680.00, currentPrice: 4210.30, weightage: 18.9, dayChange: 1.24 },
                { ticker: "INFY", name: "Infosys Ltd", sector: "IT Services", shares: 55, avgPrice: 1420.00, currentPrice: 1780.50, weightage: 15.7, dayChange: -0.32 },
                { ticker: "HDFCBANK", name: "HDFC Bank Ltd", sector: "Banking", shares: 38, avgPrice: 1560.00, currentPrice: 1720.80, weightage: 13.2, dayChange: 0.54 },
                { ticker: "BAJFINANCE", name: "Bajaj Finance Ltd", sector: "Finance", shares: 12, avgPrice: 6800.00, currentPrice: 7450.20, weightage: 14.3, dayChange: 1.05 },
                { ticker: "WIPRO", name: "Wipro Ltd", sector: "IT Services", shares: 90, avgPrice: 520.00, currentPrice: 635.40, weightage: 9.2, dayChange: -0.78 },
                { ticker: "TATASTEEL", name: "Tata Steel Ltd", sector: "Metals", shares: 180, avgPrice: 145.00, currentPrice: 162.80, weightage: 4.7, dayChange: -1.22 },
                { ticker: "ZOMATO", name: "Zomato Ltd", sector: "Consumer Tech", shares: 320, avgPrice: 110.00, currentPrice: 198.40, weightage: 2.8, dayChange: 2.14 }
            ],
            sectors: [
                { name: "IT Services", weightage: 43.8, color: "#FF2E63" },
                { name: "Banking & Finance", weightage: 27.5, color: "#00e5a0" },
                { name: "Energy", weightage: 21.2, color: "#ffd700" },
                { name: "Metals", weightage: 4.7, color: "#a78bfa" },
                { name: "Consumer Tech", weightage: 2.8, color: "#60a5fa" }
            ]
        };

        // ——— TICKER TAPE ———
        const tickerData = portfolio.holdings.map(h => {
            const sign = h.dayChange >= 0 ? '▲' : '▼';
            const col = h.dayChange >= 0 ? '#00e5a0' : '#FF2E63';
            return `<span class="ticker-item">${h.ticker} <span style="color:${col}">${sign} ${Math.abs(h.dayChange).toFixed(2)}%</span> <span class="sep">|</span> ₹${h.currentPrice.toLocaleString()}</span>`;
        }).join('');
        const inner = document.getElementById('ticker');
        inner.innerHTML = tickerData + tickerData; // duplicate for seamless loop

        // ——— HOLDINGS TABLE ———
        const tbody = document.getElementById('holdingsBody');
        portfolio.holdings.forEach(h => {
            const ret = ((h.currentPrice - h.avgPrice) / h.avgPrice * 100).toFixed(2);
            const retPos = parseFloat(ret) >= 0;
            const dayPos = h.dayChange >= 0;
            tbody.innerHTML += `
    <tr>
      <td>
        <div class="h-ticker">${h.ticker}</div>
        <div class="h-name">${h.name}</div>
      </td>
      <td><span class="h-sector">${h.sector}</span></td>
      <td><span class="mono">${h.shares}</span></td>
      <td class="mono">₹${h.avgPrice.toLocaleString()}</td>
      <td class="mono">₹${h.currentPrice.toLocaleString()}</td>
      <td class="mono" style="color:${retPos ? 'var(--green)' : 'var(--pink)'}">
        ${retPos ? '+' : ''}${ret}%
      </td>
      <td>
        <span class="mono">${h.weightage}%</span>
        <div class="weight-bar-wrap"><div class="weight-bar" style="width:${h.weightage}%"></div></div>
      </td>
      <td>
        <span class="pill ${dayPos ? 'up' : 'dn'}">${dayPos ? '▲' : '▼'} ${Math.abs(h.dayChange)}%</span>
      </td>
    </tr>
  `;
        });

        // ——— SECTOR LIST ———
        const sectorList = document.getElementById('sectorList');
        portfolio.sectors.forEach(s => {
            sectorList.innerHTML += `
    <div class="sector-item">
      <div class="sector-dot" style="background:${s.color}"></div>
      <div class="sector-name">${s.name}</div>
      <div class="sector-bar-track">
        <div class="sector-bar-fill" style="width:${s.weightage}%;background:${s.color}"></div>
      </div>
      <div class="sector-pct">${s.weightage}%</div>
    </div>
  `;
        });

        // ——— MINI HERO CHART ———
        const heroCtx = document.getElementById('heroMiniChart').getContext('2d');
        function genWalk(n, start, vol) {
            const arr = [start];
            for (let i = 1; i < n; i++) arr.push(+(arr[i - 1] + (Math.random() - 0.48) * vol).toFixed(2));
            return arr;
        }
        const miniData = genWalk(60, 1780, 8);
        miniData[miniData.length - 1] = 1847.32;
        new Chart(heroCtx, {
            type: 'line',
            data: {
                labels: miniData.map((_, i) => i),
                datasets: [{
                    data: miniData,
                    borderColor: '#FF2E63',
                    borderWidth: 1.5,
                    fill: true,
                    backgroundColor: (ctx) => {
                        const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 60);
                        g.addColorStop(0, 'rgba(255,46,99,0.15)');
                        g.addColorStop(1, 'rgba(255,46,99,0)');
                        return g;
                    },
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: { responsive: true, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }
        });

        // ——— TOP PERFORMERS ———
        const topPerformersList = document.getElementById('topPerformersList');
        const sortedHoldings = [...portfolio.holdings].sort((a, b) => {
            const retA = (a.currentPrice - a.avgPrice) / a.avgPrice;
            const retB = (b.currentPrice - b.avgPrice) / b.avgPrice;
            return retB - retA;
        }).slice(0, 4); // Get top 4

        sortedHoldings.forEach(h => {
            const ret = ((h.currentPrice - h.avgPrice) / h.avgPrice * 100).toFixed(2);
            const isPos = parseFloat(ret) >= 0;
            topPerformersList.innerHTML += `
                <div class="holdings-card-mini" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--bg2); border: 1px solid var(--border); border-radius: 16px; transition: all 0.2s;">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="width: 40px; height: 40px; border-radius: 12px; background: rgba(255, 46, 99, 0.08); display: flex; align-items: center; justify-content: center; font-family: 'JetBrains Mono', monospace; font-weight: 700; color: var(--pink); font-size: 0.8rem;">
                            ${h.ticker.substring(0, 2)}
                        </div>
                        <div>
                            <div style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 0.9rem;">${h.ticker}</div>
                            <div style="font-size: 0.7rem; color: var(--text-dim); margin-top: 0.2rem;">${h.name}</div>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 0.95rem; color: ${isPos ? 'var(--green)' : 'var(--pink)'};">${isPos ? '+' : ''}${ret}%</div>
                        <div style="font-size: 0.7rem; color: var(--text-dim); margin-top: 0.2rem;">Return</div>
                    </div>
                </div>
            `;
        });

        // ——— FOOTER DATE ———
        document.getElementById('fdate').textContent = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long' });