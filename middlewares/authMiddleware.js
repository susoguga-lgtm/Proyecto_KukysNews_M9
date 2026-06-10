import jwt from "jsonwebtoken";

export const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                // Si el token es válido, pasamos los datos del usuario a Handlebars
                res.locals.user = decodedToken;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};

// Este guardia protege las rutas privadas
export const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.redirect("/auth/login"); // Token inválido, al login
            } else {
                next(); // Todo en orden, lo dejamos pasar
            }
        });
    } else {
        res.redirect("/auth/login"); // No tiene sesión, al login directo
    }
};