import { datosCrudos } from "../data/datosCrudos.js";
import { chartColors } from "./colors.js";

// - ** Función:** `getVentasPorDia(ventas)` Yuri
//   - ** Entrada:** array de objetos de ventas crudas.
//   - ** Proceso:** agrupar por `fecha` y sumar`monto`.
//   - ** Salida:** `{ labels: ["2026-05-01"], data: [80] }`.
//   - ** Uso esperado:** dataset para ** line chart **.

const ventas = datosCrudos.ventas;

let ventasPorDiaChart = null;

const fechasUnicasCache = [...new Set(ventas.map(venta => venta.fecha))].sort();

function filtrarVentasPorRangoFechas(fechaInicio, fechaFin) {
    return ventas.filter(venta => {
        return venta.fecha >= fechaInicio && venta.fecha <= fechaFin;
    });
}

function getVentasPorDia(ventasData) {
    const agrupado = ventasData.reduce((acc, venta) => {
        const fecha = venta.fecha;
        const monto = venta.monto;

        if (acc[fecha]) {
            acc[fecha] += monto;
        } else {
            acc[fecha] = monto;
        }

        return acc;
    }, {});

    const fechasOrdenadas = Object.keys(agrupado).sort();

    return {
        labels: fechasOrdenadas,
        data: fechasOrdenadas.map(fecha => agrupado[fecha])
    };
}

function poblarSelect(selectId, opciones) {
    const select = document.getElementById(selectId);
    opciones.forEach(opcion => {
        const option = document.createElement('option');
        option.value = opcion;
        option.textContent = opcion;
        select.appendChild(option);
    });
}

function renderChart(ventasData) {
    const resultado = getVentasPorDia(ventasData);
    const ctx = document.getElementById("chartVentasPorDia");

    if (!ctx) {
        console.error("Canvas element 'chartVentasPorDia' not found");
        return;
    }

    if (ventasPorDiaChart) {
        ventasPorDiaChart.data.labels = resultado.labels;
        ventasPorDiaChart.data.datasets[0].data = resultado.data;
        ventasPorDiaChart.update();
    } else {
        ventasPorDiaChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: resultado.labels,
                datasets: [{
                    label: "Ventas por Día",
                    data: resultado.data,
                    borderColor: chartColors[1],
                    backgroundColor: chartColors[1] + '20',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    poblarSelect('filtroFechaInicioDia', fechasUnicasCache);
    poblarSelect('filtroFechaFinDia', fechasUnicasCache);

    renderChart(ventas);

    document.getElementById('btnFiltrarDia').addEventListener('click', () => {
        const fechaInicio = document.getElementById('filtroFechaInicioDia').value;
        const fechaFin = document.getElementById('filtroFechaFinDia').value;

        if (fechaInicio && fechaFin) {
            const ventasFiltradas = filtrarVentasPorRangoFechas(fechaInicio, fechaFin);
            renderChart(ventasFiltradas);
        } else {
            renderChart(ventas);
        }
    });
});
