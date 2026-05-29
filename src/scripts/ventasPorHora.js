import { datosCrudos } from "../data/datosCrudos.js";
import { chartColors } from "./colors.js";

const ventas = datosCrudos.ventas;

function getVentasPorHora(ventas) {
    const acumulador = {};

    ventas.forEach(venta => {
        const hora = venta.hora;
        const monto = venta.monto;

        if (acumulador[hora]) {
            acumulador[hora] += monto;
        } else {
            acumulador[hora] = monto;
        }
    });

    return {
        labels: Object.keys(acumulador).sort(),
        data: Object.keys(acumulador).sort().map(hora => acumulador[hora])
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const resultado = getVentasPorHora(ventas);
    const ctx = document.getElementById("chartVentasPorHora");

    if (!ctx) {
        console.error("Canvas element 'chartVentasPorHora' not found");
        return;
    }

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: resultado.labels,
            datasets: [{
                label: "Ventas por Hora",
                data: resultado.data,
                backgroundColor: chartColors[3] + '80',
                borderColor: chartColors[3],
                borderWidth: 1
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
});
