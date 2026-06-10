# Kuky's News 📰

## 🎯 Objetivos de la Aplicación
El objetivo principal de este proyecto es consolidar y demostrar las competencias adquiridas en el desarrollo de aplicaciones web Full-Stack con Node.js y bases de datos relacionales. 

Específicamente, la aplicación busca:
1. **Implementar una arquitectura MVC robusta** que separe claramente las responsabilidades de configuración, ruteo, control del negocio, servicios de datos y renderizado de vistas.
2. **Garantizar la persistencia de datos** mediante un mapeo objeto-relacional (ORM) con Sequelize, permitiendo un control transaccional limpio del contenido periodístico.
3. **Establecer un entorno seguro de autenticación** utilizando JSON Web Tokens (JWT) y cookies del navegador, garantizando que solo los usuarios autorizados tengan acceso a la gestión documental (modificación y eliminación).
4. **Ofrecer una experiencia de usuario fluida e interactiva** mediante el renderizado dinámico del lado del servidor con Handlebars, optimizado con estilos e interacciones personalizadas en CSS3.

## 👤 Autoría
- **Desarrolladora:** Susana Gutiérrez (Kuky)
- **Módulo:** Proyecto Final M9- Portafolio de Desarrollo Backend
- **Especialidad:** Web Development & Full-Stack JavaScript

## 🔗 URL del Repositorio
- **Repositorio Oficial en GitHub:** https://github.com/susoguga-lgtm/Proyecto_KukysNews_M9.git

---

## 🚀 Características Principales

- **Autenticación Segura (JWT):** Sistema de registro e inicio de sesión de usuarios con contraseñas encriptadas y manejo de tokens mediante cookies.
- **Control de Acceso (Middleware):** Rutas públicas para lectores y rutas privadas protegidas por un guardia de seguridad para la administración de contenidos.
- **CRUD Completo:** Interfaz interactiva para publicar nuevas noticias, clasificar por categorías, editar artículos existentes y eliminar publicaciones con confirmación de seguridad.
- **Frontend Dinámico:** Renderizado del lado del servidor utilizando Handlebars, potenciado con un diseño interactivo moderno y estilos personalizados adaptados (Hover states y elevación de componentes).

## 🛠️ Tecnologías Utilizadas

- **Backend:** Node.js & Express.js (Framework robusto para el enrutamiento y lógica de servidor).
- **Base de Datos & ORM:** Sequelize (Mapeo objeto-relacional) conectado a una base de datos relacional SQL.
- **Motor de Plantillas:** Express-Handlebars (Estructura de vistas modulares y layouts).
- **Seguridad:** JSON Web Tokens (JWT) para la gestión del estado de autenticación y `cookie-parser` para el almacenamiento seguro en el navegador.
- **Estilos & Diseño:** Bootstrap 5 (Estructura responsive) combinada con CSS3 personalizado para la identidad visual corporativa.

## 📸 Demostración Visual (Material del Proyecto)

A continuación se presentan capturas del portal operando en tiempo real:

### 1. Panel de Inicio (Vista de Visitante vs Usuario Autenticado)
*Aquí puedes ver la interfaz limpia y el sistema de bienvenida adaptativo.*
![Vista del Home](./screenshots/Captura_de_pantalla_(525).png)

### 2. Gestión de Contenidos (Formulario de Publicación y Edición)
*El motor del CRUD permite una clasificación rápida y segura por categorías.*
![Formulario de Noticias](./screenshots/Captura_de_pantalla_(533).png)

### 3. Artículo Completo y Control Documental
*Lectura fluida y botones de administración protegidos por rol de sesión.*
![Detalle de la Noticia](./screenshots/Captura_de%20_pantalla_(536).png)

---

## 🔧 Instrucciones de Instalación y Replicación

Si deseas ejecutar este proyecto localmente en tu computadora, sigue estos sencillos pasos:

### 1. Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior recomendado) en tu sistema.

### 2. Clonar el Repositorio
Abre tu terminal y ejecuta el siguiente comando para descargar el proyecto:
```bash
git clone [https://github.com/susoguga-lgtm/Proyecto_KukysNews_M9.git](https://github.com/susoguga-lgtm/Proyecto_KukysNews_M9.git)
cd Proyecto_portafolioM9
```

### 3. Instalar Dependencias
Instala todos los paquetes y módulos necesarios registrados en el `package.json`:
```bash
npm install
```
*Este comando instalará de forma automática: express, express-handlebars, sequelize, jsonwebtoken, cookie-parser, dotenv y los controladores de la base de datos.*

### 4. Configurar Variables de Entorno
Crea un archivo llamado `.env` en la raíz del proyecto y define las claves necesarias para la seguridad y conexión. Por ejemplo:
```env
PORT=3000
JWT_SECRET=TuClaveSecretaSuperSeguraParaLosTokens
DB_NAME=kukys_news_db
```

### 5. Iniciar el Servidor
Para levantar el entorno de desarrollo y sincronizar la base de datos, ejecuta:
```bash
npm run dev
```
o en su defecto:
```bash
node server.js
```

Una vez iniciado, abre tu navegador web e ingresa a: `http://localhost:3000`

---

## 📂 Estructura del Proyecto
```text
├── config/          # Configuración de la Base de Datos
├── controllers/     # Lógica de negocio (Auth y Noticias)
├── middlewares/     # Guardias de seguridad de rutas (AuthMiddleware)
├── models/          # Modelos de datos de Sequelize (User, News)
├── public/          # Archivos estáticos públicos
│   ├── css/         # Estilos personalizados (style.css)
│   └── js/          # Lógica del lado del cliente (main.js)
├── routes/          # Definición de rutas del servidor
├── services/        # Consultas directas a la Base de Datos
├── views/           # Plantillas de Handlebars (Pantallas)
│   ├── partials/    # Componentes repetibles (Navbar, Footer)
│   └── layouts/     # Estructura base HTML (main.handlebars)
├── .env             # Variables de entorno ocultas
├── server.js        # Archivo central de inicio de la aplicación
└── package.json     # Registro de configuraciones y dependencias
```