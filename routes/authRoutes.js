/* Aquí conectamos las URLs que el usuario escribe en el navegador con las funciones de tu controlador. */

import { Router } from "express";
import { 
    renderRegister, 
    handleRegister, 
    renderLogin, 
    handleLogin,
    logout
 } from "../controllers/authController.js";

const router = Router();

// Ruta para ver el formulario (GET)
router.get("/register", renderRegister);

// Ruta para enviar los datos del formulario (POST)
router.post("/register", handleRegister);

// Ruta para cerrar sesión
router.get("/logout", logout);

export default router;

// Rutas de Login
router.get("/login", renderLogin);
router.post("/login", handleLogin);