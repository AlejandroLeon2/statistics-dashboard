import { datosCrudos } from "../data/datosCrudos.js";
import { chartColors } from "./colors.js";

const tareas = datosCrudos.tareas;

function getTareasPorEstado(tareas) {
    const acumulador = {};

    tareas.forEach(tareas => {

        const estado = tareas.estado;

        if (acumulador[estado]) {
            acumulador[estado]++;
        } else {
            acumulador[estado] = 1;
        }

    });

    return {
        labels: Object.keys(acumulador),
        data: Object.values(acumulador)
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const resultado = getTareasPorEstado(tareas);
    const ctx = document.getElementById("chartTareasPorEstado");

    if (!ctx) {
        console.error("Canvas element 'chartTareasPorEstado' not found");
        return;
    }

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: resultado.labels,

            datasets: [{
                label: "Tareas Por Estado",
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