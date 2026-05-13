const datosProcesados = {
  "kpis": [
    { "title": "Ventas Totales", "value": 80, "unit": "S/" },
    { "title": "Pedidos Realizados", "value": 3, "unit": "transacciones" },
    { "title": "Empleados Activos", "value": 2, "unit": "personas" },
    { "title": "Tareas Completadas", "value": 1, "unit": "tareas" }
  ],
  "datasets": {
    "ventasPorDia": {
      "type": "line",
      "labels": ["2026-05-01"],
      "data": [80]
    },
    "ventasPorCategoria": {
      "type": "bar",
      "labels": ["Comida","Bebidas"],
      "data": [65,15]
    },
    "metodoPago": {
      "type": "pie",
      "labels": ["Tarjeta","Efectivo"],
      "data": [55,25]
    },
    "asistenciaPorEstado": {
      "type": "doughnut",
      "labels": ["Presentes","Ausentes"],
      "data": [1,1]
    },
    "tareasPorEstado": {
      "type": "bar",
      "labels": ["Completadas","Pendientes","En progreso"],
      "data": [1,1,0]
    }
  },
  "filtros": {
    "fechas": ["2026-05-01"],
    "categorias": ["Comida","Bebidas"],
    "usuarios": ["Ana","Luis","Carla"]
  },
  "config": {
    "modoOscuro": true,
    "animaciones": true
  }
}
