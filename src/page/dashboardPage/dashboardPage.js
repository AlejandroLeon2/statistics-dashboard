/**
 * DashboardPage
 * Pure JavaScript (Vanilla JS)
 */
import { getKPIs } from '../../scripts/kpis.js';

document.addEventListener('DOMContentLoaded', () => {
  const kpisSection = document.getElementById('KPIs-section');
  renderKPIs(kpisSection);
});

function renderKPIs(kpisSection) {
  const kpis = getKPIs();
  kpisSection.innerHTML = '';
  kpis.forEach((kpi) => {
    const kpiElement = document.createElement('div');
    kpiElement.className = 'col-sm-6 col-md-3 mb-4';

    kpiElement.innerHTML = `
      <div class="card shadow-sm h-100 border-0 rounded-3">
        <div class="card-body text-center">
          <h6 class="card-title fw-bold mb-2" style="color: var(--chart-color-1)">${kpi.title}</h6>
          <p class="card-text display-5 fw-bold mb-0" style="color: var(--chart-color-3)">
            ${kpi.value}
          </p>
          <small class="text-muted">${kpi.unit}</small>
        </div>
      </div>
    `;
    kpisSection.appendChild(kpiElement);
  });
}
