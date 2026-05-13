
# 📄 Plan de Implementación – Dashboard de Estadísticas (Vanilla JS)

## 1. **Carga de datos**
### Función: `loadData()`
- **Propósito:** obtener los datos crudos desde un archivo `data.js` (simulado como JSON).
- **Entrada:** no recibe parámetros, simplemente importa el objeto JSON.
- **Salida:** retorna el objeto completo con las colecciones (`ventas`, `asistencia`, `tareas`, `usuarios`).
- **Expectativa:** tener en memoria los registros crudos para que otras funciones los procesen.
- **Ejemplo esperado:**
  ```js
  const data = loadData();
  console.log(data.ventas.length); // cantidad de registros de ventas
  ```

---

## 2. **Procesamiento de datos**
Aquí se definen funciones que transforman los datos crudos en estructuras listas para graficar o mostrar como KPIs.

### a Ventas
- **Función:** `getVentasPorDia(ventas)` Yuri
  - **Entrada:** array de objetos de ventas crudas.
  - **Proceso:** agrupar por `fecha` y sumar `monto`.
  - **Salida:** `{ labels: ["2026-05-01"], data: [80] }`.
  - **Uso esperado:** dataset para **line chart**.

- **Función:** `getVentasPorCategoria(ventas)` - Robert
  - **Entrada:** array de ventas.
  - **Proceso:** agrupar por `categoria` y sumar `monto`.
  - **Salida:** `{ labels: ["Comida","Bebidas"], data: [65,15] }`.
  - **Uso esperado:** dataset para **bar chart**.

- **Función:** `getMetodoPago(ventas)`  Pedro
  - **Entrada:** array de ventas.
  - **Proceso:** contar transacciones por `metodoPago`.
  - **Salida:** `{ labels: ["Tarjeta","Efectivo"], data: [55,25] }`.
  - **Uso esperado:** dataset para **pie chart**.

---

### b Asistencia
- **Función:** `getAsistenciaPorEstado(asistencia)`
  - **Entrada:** array de registros de asistencia.
  - **Proceso:** contar cuántos tienen `estado = presente` y cuántos `estado = ausente`.
  - **Salida:** `{ labels: ["Presentes","Ausentes"], data: [1,1] }`.
  - **Uso esperado:** dataset para **doughnut chart**.

---

### c Tareas
- **Función:** `getTareasPorEstado(tareas)`
  - **Entrada:** array de tareas.
  - **Proceso:** contar cuántas están en cada estado (`completada`, `pendiente`, `en progreso`).
  - **Salida:** `{ labels: ["Completadas","Pendientes","En progreso"], data: [1,1,0] }`.
  - **Uso esperado:** dataset para **bar chart**.

---

### d KPIs
- **Función:** `getKPIs(data)`
  - **Entrada:** objeto completo con ventas, asistencia, tareas, usuarios.
  - **Proceso:** calcular métricas clave:
    - Ventas totales → suma de `monto`.
    - Pedidos realizados → cantidad de registros en ventas.
    - Empleados activos → contar usuarios con `activo = true`.
    - Tareas completadas → contar tareas con `estado = completada`.
  - **Salida:** array de objetos:
    ```js
    [
      { title: "Ventas Totales", value: 80, unit: "S/" },
      { title: "Pedidos Realizados", value: 3, unit: "transacciones" },
      { title: "Empleados Activos", value: 2, unit: "personas" },
      { title: "Tareas Completadas", value: 1, unit: "tareas" }
    ]
    ```
  - **Uso esperado:** renderizar tarjetas KPI en el dashboard.

---

## 3. **Renderizado**
Una vez procesados los datos, se deben mostrar en la interfaz.

### a KPIs
- **Función:** `renderKPIs(kpis)`
  - **Entrada:** array de KPIs.
  - **Proceso:** recorrer el array y crear dinámicamente tarjetas HTML.
  - **Salida:** inserción de elementos `<div>` en el contenedor de KPIs.
  - **Expectativa:** mostrar métricas clave en la parte superior del dashboard.

### b Gráficos
- **Función:** `renderChart(dataset, type, elementId)`
  - **Entrada:** dataset procesado (`labels` + `data`), tipo de gráfico (`line`, `bar`, `pie`, `doughnut`), id del canvas.
  - **Proceso:** inicializar un gráfico Chart.js con los datos.
  - **Salida:** gráfico renderizado en pantalla.
  - **Expectativa:** visualización clara y dinámica de los datos.

---

