import { datosCrudos } from "../data/datosCrudos.js";

// - **Función:** `getMetodoPago(ventas)`  Pedro
//   - **Entrada:** array de ventas.
//   - **Proceso:** contar transacciones por `metodoPago`.
//   - **Salida:** `{ labels: ["Tarjeta","Efectivo"], data: [55,25] }`.
//   - **Uso esperado:** dataset para **pie chart**.

const ventas = datosCrudos.ventas;

function getMetodoPago(ventas) {
    return {
        labels: ventas.map(element => element.metodoPago),
        data: ventas.map(element => element.monto)
    };
}

// console.log(getMetodoPago(ventas));

document.addEventListener("DOMContentLoaded", () => {
  const metodoPago = getMetodoPago(ventas);
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: metodoPago.labels,
      datasets: [{
        data: metodoPago.data,
        backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56"]
      }]
    }
  });
});
