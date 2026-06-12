import { crearComentario } from "../services/commentService.js";

export const agregarComentario = async (req, res) => {
    try {
        const { texto } = req.body;
        const { idNoticia } = req.params;
        const idUsuario = req.usuario ? req.usuario.id : null;

        if (!texto || texto.trim() === "") {
            return res.redirect("/noticias/" + idNoticia);
        }

        // El Controlador llama al Servicio 
        await crearComentario(texto, idNoticia, idUsuario);

        res.redirect("/noticias/" + idNoticia);
    } catch (error) {
        console.error(`Error en el controlador de comentarios: ${error}`);
        res.status(500).send("Error interno del servidor");
    }
};