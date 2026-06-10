import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import { checkUser } from "./middlewares/authMiddleware.js";
import newsRoutes from "./routes/newsRoutes.js";
import { getAllNews } from "./services/newsService.js";


// IMPORTACIONES PARA LA BASE DE DATOS Y MODELOS
import { createDatabaseIfNotExists, testConnection, } from "./config/database.js";
import sequelize from "./config/database.js";

import { User, News, Comment } from "./models/index.js";

// Configuración necesaria para usar __dirname con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración del servidor
const app = express();
const PORT = process.env.PORT || 3000;

await createDatabaseIfNotExists();

// Probar conexión y sincronizar tablas
testConnection();
sequelize.sync({ alter: true })
    .then(() => 
        console.log("Tablas de Kukys News sincronizadas perfectamente."))

    .catch((error) => console.error(
        `Error al sincronizar tablas: ${error.message}`
    ));

// Configuración de Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes);
app.use(cookieParser());
app.use(checkUser);
app.use("/noticias", newsRoutes);

app.get("/", async (req, res) => {
    try {
        const noticias = await getAllNews();
        const noticiasLimpias = noticias.map(noticia => noticia.get({ plain: true }));

        res.render("home", { 
            title: "Kuky's News - Inicio",
            noticias: noticiasLimpias, 
            mensajeExito: req.query.mensaje === "exito",        // Para cuando crea
            mensajeEditado: req.query.mensaje === "editado",    // Para cuando edita
            mensajeEliminado: req.query.mensaje === "eliminado" // Para cuando borra
        });
    } catch (error) {
        console.error(error);
        
        res.render("home", { error: "No se pudieron cargar las noticias" });
    }
});
// Levantar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor de Kuky's News corriendo en http://localhost:${PORT}`);
});