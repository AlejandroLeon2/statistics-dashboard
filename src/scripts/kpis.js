import { datosCrudos } from "../data/datosCrudos.js";


// ### d KPIs

// - **Función:** `getKPIs(data)`
//   - **Entrada:** objeto completo con ventas, asistencia, tareas, usuarios.
//   - **Proceso:** calcular métricas clave:
//     - Ventas totales → suma de `monto`.
//     - Pedidos realizados → cantidad de registros en ventas.
//     - Empleados activos → contar usuarios con `activo = true`.
//     - Tareas completadas → contar tareas con `estado = completada`.
//   - **Salida:** array de objetos:
//   ```js
//     [
//       { title: "Ventas Totales", value: 80, unit: "S/" },
//       { title: "Pedidos Realizados", value: 3, unit: "transacciones" },
//       { title: "Empleados Activos", value: 2, unit: "personas" },
//       { title: "Tareas Completadas", value: 1, unit: "tareas" }
//     ]
//     ```
//   - **Uso esperado:** renderizar tarjetas KPI en el dashboard.
// ---



export function getKPIs() {
    const ventas = datosCrudos.ventas;
    const tareas = datosCrudos.tareas;
    const usuarios = datosCrudos.usuarios;

    return [
        { title: "Ventas Totales", value: ventas.reduce((acc, venta) => acc + venta.monto, 0), unit: "S/" },
        { title: "Pedidos Realizados", value: ventas.length, unit: "transacciones" },
        { title: "Empleados Activos", value: usuarios.filter(usuario => usuario.activo).length, unit: "personas" },
        { title: "Tareas Completadas", value: tareas.filter(tarea => tarea.estado === "completada").length, unit: "tareas" }
    ];
}

export function renderKPIs(kpisSection) {
    const kpis = getKPIs();
    kpisSection.innerHTML = '';
    kpis.forEach((kpi) => {
        const kpiElement = document.createElement('div');
        kpiElement.className = 'col-6 col-md-3 mb-4';

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

document.addEventListener('DOMContentLoaded', () => {
    const kpisSection = document.getElementById('KPIs-section');
    renderKPIs(kpisSection);
});