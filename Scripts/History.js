async function loadHistoryAndRender() {
    try {
        const res = await fetch('data/portfolio.json');
        if (!res.ok) throw new Error('Portfolio data not found');
        const portfolioData = await res.json();

        const yearsGrid = document.querySelector('.years-grid');
        const overviewStrip = document.querySelector('.overview-strip');

        if (!yearsGrid || !overviewStrip) return; // not on history page

        // Render overview strip
        const investedAmount = (portfolioData.index.totalInvested / 100000).toFixed(2);

        let totalDividends = 0;
        let totalShares = 0;

        // We need to fetch 2024.json and 2025.json to get accurate dividend and shares data
        // For a more robust app, this would be in a single summary file.
        // For now, we'll try to load known years out to current year to tally them up
        let currentYear = new Date().getFullYear();
        let yearsData = [];

        for (let y = 2024; y <= currentYear; y++) {
            try {
                const yrRes = await fetch(`data/${y}.json`);
                if (yrRes.ok) {
                    const yrData = await yrRes.json();
                    yearsData.push(yrData);
                    totalDividends += yrData.summary.dividendsReceived || 0;
                    totalShares += yrData.summary.totalSharesBought || 0;
                }
            } catch (e) { }
        }

        overviewStrip.innerHTML = `
          <div class="os-item">
            <div class="os-label">Years Active</div>
            <div class="os-val">${yearsData.length}</div>
            <div class="os-sub">since Jan 2024</div>
          </div>
          <div class="os-item">
            <div class="os-label">Total Invested</div>
            <div class="os-val">₹${investedAmount}L</div>
            <div class="os-sub">across all years</div>
          </div>
          <div class="os-item">
            <div class="os-label">Total Dividends</div>
            <div class="os-val">₹${totalDividends.toLocaleString()}</div>
            <div class="os-sub">passive income earned</div>
          </div>
          <div class="os-item">
            <div class="os-label">Shares Accumulated</div>
            <div class="os-val">${totalShares}</div>
            <div class="os-sub">across ${portfolioData.holdings ? portfolioData.holdings.length : 0} companies</div>
          </div>
        `;

        // Render year cards
        yearsGrid.innerHTML = '';

        // Sort descending so newest is first, or keep ascending? Original had 2024 then 2025.
        // We'll keep ascending.
        yearsData.sort((a, b) => a.year - b.year).forEach(d => {
            const retPos = d.summary.portfolioReturn >= 0;

            yearsGrid.innerHTML += `
            <a href="year.html?year=${d.year}" class="year-card">
              <div class="yc-header">
                <div>
                  <div class="yc-year">${d.year}</div>
                  <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:0.8rem;color:var(--text-dim);margin-top:0.2rem">
                    ${d.subtitle}</div>
                </div>
                <div class="yc-status">
                  <div class="yc-return" style="color:var(--${retPos ? 'green' : 'pink'})">${retPos ? '+' : ''}${d.summary.portfolioReturn}%</div>
                  <div class="yc-label">Annual Return</div>
                </div>
              </div>
              <div class="yc-body">
                <div class="yc-stats">
                  <div>
                    <div class="yc-stat-label">Shares Bought</div>
                    <div class="yc-stat-val">${d.summary.totalSharesBought}</div>
                  </div>
                  <div>
                    <div class="yc-stat-label">Invested</div>
                    <div class="yc-stat-val">₹${(d.summary.totalInvested / 100000).toFixed(2)}L</div>
                  </div>
                  <div>
                    <div class="yc-stat-label">Dividends</div>
                    <div class="yc-stat-val">₹${d.summary.dividendsReceived.toLocaleString()}</div>
                  </div>
                </div>
                <div class="yc-highlights">
                  ${(d.quarters.find(q => q.quarter === 'Q4') || d.quarters[0])?.highlights.slice(0, 4).map(h => `<div class="yc-highlight">${h}</div>`).join('') || ''}
                </div>
              </div>
              <div class="yc-footer">
                <div class="yc-cta">View Full Year</div>
                <div class="yc-arrow">→</div>
              </div>
            </a>
            `;
        });

        // Add "Coming Soon" for next year
        const nextYear = currentYear + 1;
        yearsGrid.innerHTML += `
        <div class="year-card year-card-coming">
          <div class="ycc-year">${nextYear}</div>
          <div class="ycc-label">in progress — chapter unfolding</div>
        </div>
        `;

    } catch (e) {
        console.error('Failed to load history data via JSON', e);
    }
}

// Call on load
loadHistoryAndRender();
