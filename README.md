# 📚 Gestión de Estudiantes

Aplicación desarrollada en **React + Tailwind CSS** para gestionar información de estudiantes sin utilizar bases de datos. Todos los datos se almacenan en el **localStorage** del navegador.

---

## 🧠 Funcionalidades

- ✅ Agregar estudiantes con nombre, carné, materias y promedio.
- ✅ Eliminar estudiantes por carné.
- ✅ Buscar estudiantes por nombre o carné.
- ✅ Filtrar estudiantes con promedio mayor a 8.0.
- ✅ Ver detalle de materias inscritas de un estudiante.
- ✅ Mostrar promedio general del grupo.
- ✅ Validación de carnés duplicados usando `Set`.

---

## 🧰 Tecnologías Utilizadas

- **React + Vite (template SWC)**
- **Tailwind CSS 3.4.1**
- **JavaScript**
- **LocalStorage** (sin base de datos)

---

## 📁 Estructura del Proyecto

```
gestion-estudiantes/
├── public/
├── src/
│   ├── assets/             # Imágenes o íconos (si se usan)
│   ├── components/         # Componentes reutilizables
│   ├── data/               # Datos simulados (30 estudiantes)
│   ├── utils/              # Funciones de utilidad (promedio, almacenamiento)
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Entrada de React
│   └── index.css           # Tailwind base
├── tailwind.config.js
├── package.json
└── vite.config.js
```

---

## 📦 Instalación y Uso

1. Clona el repositorio:

```bash
git clone https://github.com/aleosorio22/gestion-estudiantes.git
cd gestion-estudiantes
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Accede a `http://localhost:5173` para usar la app.

---

## 📌 Estructuras de Datos Aplicadas

- 📋 **Listas (arrays)**: para almacenar estudiantes.
- 🧾 **Diccionarios (objetos)**: cada estudiante es un objeto `{ nombre, carne, materias, promedio }`.
- 🧷 **Tuplas simuladas**: cada materia es un arreglo de 2 elementos: `[nombre, código]`.
- 🔐 **Set**: para verificar carnés duplicados.

---

## 👨‍💻 Autor

Desarrollado por Alejandro Osorio – Estudiante de Ingeniería en Sistemas.  
Proyecto académico demostrativo de estructuras de datos aplicadas en React.
