import { datosCrudos } from "../data/datosCrudos.js";

const ventas = datosCrudos.ventas;

function getVentasPorCategoria(ventas){

    const acumulador = {};

    ventas.forEach(ventas => {

        const categoria = ventas.categoria;
        const monto = ventas.monto;

        if(acumulador[categoria]){
            acumulador[categoria]+= monto;

        }else{
            acumulador[categoria] = monto;
        }
        
    });

    return{
        labels:Object.keys(acumulador),
        data:Object.values(acumulador)
    };
}

document.addEventListener("DOMContentLoaded",() =>{
    const resultado = getVentasPorCategoria(ventas);

    const ctx = document.getElementById("chartCategoria");

    new Chart(ctx,{
        type:"bar",
        data:{
            labels:resultado.labels,

            datasets:[{
                label: "Ventas por Categoria",
                data : resultado.data,
                backgroundColor:[
                    "orange",
                    "skyblue"
                ]
            }]

        },

    });
});