import { datosCrudos } from "../data/datosCrudos.js";

const tareas = datosCrudos.tareas;

function getTareasPorEstado(tareas){
    const acumulador = {};

    tareas.forEach(tareas => {

        const estado = tareas.estado;

        if(acumulador[estado]){
            acumulador[estado]++;
        }else{
            acumulador[estado] = 1;
        }
        
    });

    return{
        labels: Object.keys(acumulador),
        data:Object.values(acumulador)
    };
}

document.addEventListener("DOMContentLoaded",() =>{
    const resultado = getTareasPorEstado(tareas);

    const ctx = document.getElementById("chartTareasPorEstado");

    new Chart(ctx,{
        type:"bar",
        data:{
            labels:resultado.labels,

            datasets:[{
                label: "Tareas Por Estado",
                data : resultado.data,
                backgroundColor:[
                    "violet",
                    "green",
                    "blue"
                ]
            }]

        },

    });
});