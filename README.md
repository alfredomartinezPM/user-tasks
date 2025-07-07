# 🧪 Prueba Técnica - NestJS Tasks API

## Objetivo
Este proyecto contiene una pequeña API funcional en NestJS y SQLite. El objetivo de esta prueba es que realices algunos cambios y agregues funcionalidades nuevas.

No necesitas tener experiencia previa con NestJS. Puedes revisar su documentación oficial, o preguntar si tienes dudas.

---

## 📝 Actividades a realizar

1. **Agrega el campo `dueDate` (fecha de vencimiento) al modelo de tareas**:
   - Modifica la entidad `Task`.
   - Asegúrate de que se guarde correctamente al crear una tarea.

2. **Crea un endpoint para obtener las tareas pendientes** de un usuario específico, ordenadas por `dueDate`.

3. **Valida que el campo `title` no esté vacío** al crear una tarea, usando decoradores de validación.

4. (Opcional, si te queda tiempo): crea un endpoint para marcar una tarea como completada.

---

## 🚀 Instrucciones para iniciar

El proyecto ya está configurado para usarse en **GitHub Codespaces**.

### Para correrlo:

```bash
npm install
npm run start:dev
```

El servidor corre en: `http://localhost:3000`

Puedes probar los endpoints con [Postman](https://www.postman.com/) o [Hoppscotch](https://hoppscotch.io).

---

## 📚 Recursos útiles

- [Documentación oficial de NestJS](https://docs.nestjs.com/)
- [Decoradores de validación](https://github.com/typestack/class-validator#validation-decorators)
- [Documentación de TypeORM](https://typeorm.io/)

---

## ✅ Criterios de evaluación

- Comprensión del código existente y capacidad de adaptarse.
- Buenas prácticas básicas de REST.
- Uso correcto de DTOs y validaciones.
- Claridad en la estructura del código y uso de servicios.
- Uso mínimo de documentación (no es un examen de memoria).
