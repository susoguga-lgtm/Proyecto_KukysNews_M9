import News from "../models/News.js"; 

//Agregamos la lógica para crear una noticiaen la base de datos
export const createNews = async (titulo, contenido, categoria, userId) => {
    try {
        const nuevaNoticia = await News.create({
            titulo,
            contenido,
            categoria,
            usuarioId: userId // Asociamos la noticia al ID de la persona logueada
        });
        return nuevaNoticia;
    } catch (error) {
        throw new Error(`Error al guardar la noticia: ${error.message}`);
    }
};

//Agregamos la lógica para obtener todas las noticias
export const getAllNews = async () => {
    try {
        const noticias = await News.findAll({
            order: [["createdAt", "DESC"]] // DESC significa "las más nuevas primero"
        });
        return noticias;
    } catch (error) {
        throw new Error("Error al obtener las noticias");
    }
};

//Agregamos la lógica para obtener una noticia por su ID
export const getNewsById = async (id) => {
    try {
        const noticia = await News.findByPk(id);
        return noticia;
    } catch (error) {
        throw new Error("Error al obtener los detalles de la noticia");
    }
};

//Agregamos la lógica para actualizar y borrar en la base de datos.
// Actualizar una noticia
export const updateNews = async (id, data) => {
    try {
        const noticia = await News.findByPk(id);
        if (noticia) {
            return await noticia.update(data);
        }
        return null;
    } catch (error) {
        throw new Error("Error al actualizar la noticia");
    }
};

// Eliminar una noticia
export const deleteNews = async (id) => {
    try {
        const noticia = await News.findByPk(id);
        if (noticia) {
            return await noticia.destroy();
        }
        return false;
    } catch (error) {
        throw new Error("Error al eliminar la noticia");
    }
};