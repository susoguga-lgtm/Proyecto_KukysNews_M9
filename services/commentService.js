import Comment from "../models/Comment.js";

export const crearComentario = async (texto, idNoticia, idUsuario) => {
    try {
        const nuevoComentario = await Comment.create({
            texto: texto,
            noticiaId: idNoticia,
            usuarioId: idUsuario
        });
        return nuevoComentario;
    } catch (error) {
        throw new Error(`Error en el servicio al crear comentario: ${error}`);
    }
};