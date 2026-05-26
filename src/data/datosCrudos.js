export const datosCrudos = {
  "ventas": [
    { "id": 1, "fecha": "2026-05-01", "hora": "12:30", "producto": "Makis", "categoria": "Comida", "cantidad": 2, "precioUnitario": 20, "monto": 40, "cliente": "Ana", "metodoPago": "Tarjeta" },
    { "id": 2, "fecha": "2026-05-01", "hora": "13:15", "producto": "Alitas BBQ", "categoria": "Comida", "cantidad": 1, "precioUnitario": 25, "monto": 25, "cliente": "Luis", "metodoPago": "Efectivo" },
    { "id": 3, "fecha": "2026-05-01", "hora": "14:05", "producto": "Cerveza", "categoria": "Bebidas", "cantidad": 3, "precioUnitario": 5, "monto": 15, "cliente": "Carla", "metodoPago": "Tarjeta" }
  ],
  "asistencia": [
    { "id": 101, "fecha": "2026-05-01", "horaEntrada": "08:00", "horaSalida": "17:00", "empleado": "Ana", "evento": "Turno mañana", "estado": "presente" },
    { "id": 102, "fecha": "2026-05-01", "horaEntrada": null, "horaSalida": null, "empleado": "Luis", "evento": "Turno mañana", "estado": "ausente" }
  ],
  "tareas": [
    { "id": 201, "titulo": "Revisión de inventario", "descripcion": "Contar stock en almacén", "estado": "completada", "responsable": "Ana", "fechaCreacion": "2026-04-30", "fechaLimite": "2026-05-02" },
    { "id": 202, "titulo": "Capacitación de personal", "descripcion": "Entrenar en nuevas recetas", "estado": "pendiente", "responsable": "Luis", "fechaCreacion": "2026-05-01", "fechaLimite": "2026-05-05" }
  ],
  "usuarios": [
    { "id": 1, "nombre": "Ana", "rol": "Administrador", "activo": true, "email": "ana@empresa.com" },
    { "id": 2, "nombre": "Luis", "rol": "Empleado", "activo": true, "email": "luis@empresa.com" },
    { "id": 3, "nombre": "Carla", "rol": "Empleado", "activo": false, "email": "carla@empresa.com" }
  ]
}