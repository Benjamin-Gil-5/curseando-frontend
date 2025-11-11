# Curseando Frontend

Interfaz web desarrollada en **Angular 17** para la plataforma de gestión e inscripción de cursos online **Curseando**.  
Permite listar, filtrar e inscribirse en cursos a través de una API REST provista por el backend en Spring Boot.

---

## Tecnologías utilizadas

- **Angular 17**
- **TypeScript**
- **HTML5 / CSS3 (responsive)**
- **Font Awesome** (iconografía)
- **Reactive Forms** (validación de formularios)
- **HttpClient** (consumo de API REST)

---

##  Instalación y ejecución

###  Requisitos previos

- Node.js (v18 o superior)
- Angular CLI (`npm install -g @angular/cli`)
- Backend en ejecución (por defecto en `http://localhost:8080`)

---

###  Pasos de ejecución

1. Clonar el repositorio:
   git clone https://github.com/tuusuario/curseando-frontend.git
   cd curseando-frontend

2. Instalar dependencias:
   npm install

3. Configurar el entorno (opcional):
   El archivo `src/environments/environment.ts` contiene la URL base del backend:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8080/api'
   };
   ```

4. Ejecutar la aplicación:
   ng serve

5. Abrir en el navegador:
   http://localhost:4200

---

## 🧱 Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── course-list/
│   │   │   ├── course-list.component.{ts,html,css}
│   │   └── course-detail/
│   │       ├── course-detail.component.{ts,html,css}
│   ├── models/
│   │   └── course.ts
│   ├── services/
│   │   └── course.service.ts
│   ├── app.routes.ts
│   └── app.component.{ts,html,css}
│
├── environments/
│   └── environment.ts
│
├── styles.css
└── index.html
```

---

## 💡 Funcionalidades principales

✅ **Listado de cursos** con filtro por nivel.  
✅ **Detalle de curso** con descripción, módulos, instructor y cupos.  
✅ **Formulario de inscripción** con validación reactiva.  
✅ **Manejo dinámico de cupos:** el formulario solo aparece si hay lugares disponibles.  
✅ **Mensajes de éxito o error** al intentar inscribirse.  
✅ **Diseño limpio y responsivo**, con tipografía *Inter* y colores suaves.

---

## Autor

**Esteban Sergio Benjamín Gil Morales**  