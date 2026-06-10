import express from "express";
import { 
    renderCreateNews, 
    handleCreateNews, 
    renderNewsDetails, 
    renderEditNews, 
    handleUpdateNews, 
    handleDeleteNews 
} from "../controllers/newsController.js";
import { requireAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

// 1. Rutas para CREAR (siempre arriba)
router.get("/crear", requireAuth, renderCreateNews);
router.post("/crear", requireAuth, handleCreateNews);

// 2. Rutas para EDITAR y ELIMINAR (al medio)
router.get("/editar/:id", requireAuth, renderEditNews);
router.post("/editar/:id", requireAuth, handleUpdateNews);
router.post("/eliminar/:id", requireAuth, handleDeleteNews);

// 3. Ruta para LEER DETALLES (¡Siempre, siempre al final!)
// Si esta ruta va arriba, Express creerá que "crear" o "editar" son IDs
router.get("/:id", renderNewsDetails);

export default router;