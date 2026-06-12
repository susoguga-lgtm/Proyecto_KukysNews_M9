//EL DIRECTOR DE ORQUESTA Este archivo va a tener dos tareas: una función para mostrar el formulario HTML en la pantalla, y otra función para atrapar los datos cuando el usuario haga clic en "Registrarse".

import { registerUser, loginUser } from "../services/authService.js";

// Muestra la vista del formulario
export const renderRegister = (req, res) => {
    res.render("register", { title: "Registro - Kuky's News" });
};

// Procesa los datos del formulario
export const handleRegister = async (req, res) => {
    const { nombre, email, password } = req.body;

    try {
        await registerUser(nombre, email, password);
        // Si todo sale bien, lo redirigimos a la pagina de login
        res.redirect("/auth/login");

    } catch (error) {
        console.error(`Error en el controlador de registro: ${error.message}`);
        // Si hay error, volvemos a mostrar el formulario pasandole el mensaje de error
        
        res.render("register", { 
            title: "Registro - Kuky's News", 
            error: error.message 
        });
    }
};

// Muestra la vista del login
export const renderLogin = (req, res) => {
    res.render("login", { title: "Login - Kuky's News" });
};

// Procesa los datos cuando el usuario intenta entrar
export const handleLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await loginUser(email, password);

        res.cookie("jwt", token, { 
            httpOnly: true, 
             maxAge: 3600000 // La cookie dura 1 hora (igual que el token del .env)
        });

        res.redirect("/");
        
        
    } catch (error) {
        console.error(`Error en el login: ${error.message}`);
        res.render("login", { 
            title: "Login - Kuky's News", 
            error: error.message 
        });
    }
};

export const logout = (req, res) => {
    // Reemplazamos la cookie por una vacía que expira en 1 milisegundo
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
};