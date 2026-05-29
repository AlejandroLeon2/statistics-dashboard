import { datosCrudos } from "../data/datosCrudos.js";
import { chartColors } from "./colors.js";

const ventas = datosCrudos.ventas;

function getVentasPorCategoria(ventas) {

    const acumulador = {};

    ventas.forEach(ventas => {

        const categoria = ventas.categoria;
        const monto = ventas.monto;

        if (acumulador[categoria]) {
            acumulador[categoria] += monto;

        } else {
            acumulador[categoria] = monto;
        }

    });

    return {
        labels: Object.keys(acumulador),
        data: Object.values(acumulador)
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const resultado = getVentasPorCategoria(ventas);
    const ctx = document.getElementById("chartCategoria");

    if (!ctx) {
        console.error("Canvas element 'chartCategoria' not found");
        return;
    }

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: resultado.labels,

            datasets: [{
                label: "Ventas por Categoria",
                data: resultado.data,
                backgroundColor: chartColors.slice(0, resultado.labels.length)
            }],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }

        },

    });
});