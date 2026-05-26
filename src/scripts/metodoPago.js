import { datosCrudos } from "../data/datosCrudos.js";

// - **Función:** `getMetodoPago(ventas)`  Pedro
//   - **Entrada:** array de ventas.
//   - **Proceso:** contar transacciones por `metodoPago`.
//   - **Salida:** `{ labels: ["Tarjeta","Efectivo"], data: [55,25] }`.
//   - **Uso esperado:** dataset para **pie chart**.

const ventas = datosCrudos.ventas;

function getMetodoPago(ventas) {
  const agrupado = {};

  ventas.forEach(venta => {
    const metodo = venta.metodoPago;
    const monto = venta.monto;

    if (agrupado[metodo]) {
      agrupado[metodo] += monto;
    } else {
      agrupado[metodo] = monto;
    }
  });

  return {
    labels: Object.keys(agrupado),
    data: Object.values(agrupado)
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
