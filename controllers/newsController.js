import { 
    createNews, 
    getAllNews,  
    getNewsById, 
    updateNews, 
    deleteNews 
} from "../services/newsService.js";

// Muestra el formulario vacío
export const renderCreateNews = (req, res) => {
    res.render("createNews", { title: "Publicar Noticia - Kuky's News" });
};

// Procesa el formulario cuando le dan a "Guardar"
export const handleCreateNews = async (req, res) => {
    const { titulo, contenido, categoria } = req.body;
    
    // Sacamos el ID del usuario directamente de la sesión (el middleware lo puso aquí)
    const userId = res.locals.user.id; 

    try {
        await createNews(titulo, contenido, categoria, userId);
        // Le pasamos una "señal" en la URL para avisar que todo salió bien
        res.redirect("/?mensaje=exito");

    } catch (error) {

        console.error(`Error al publicar: ${error.message}`);
        
        res.render("createNews", { 
            title: "Publicar Noticia - Kuky's News", 
            error: error.message 
        });
    }
};

// Muestra el detalle de una noticia específica
export const renderNewsDetails = async (req, res) => {
    try {
        const { id } = req.params; // Sacamos el ID de la URL
        const noticia = await getNewsById(id);
        
        if (!noticia) {
            return res.render("home", { error: "Noticia no encontrada" });
        }

        // Renderizamos details.handlebars y le pasamos los datos limpios
        res.render("details", {
            title: `${noticia.titulo} - Kuky's News`,
            noticia: noticia.get({ plain: true })
        });
    } catch (error) {
        console.error(error);

        res.render("home", { error: "Error al cargar la noticia" });
    }
};

// Muestra el formulario para editar
export const renderEditNews = async (req, res) => {
    try {
        const { id } = req.params;
        const noticia = await getNewsById(id);

        res.render("editNews", {
            title: "Editar Noticia",
            noticia: noticia.get({ plain: true })
        });

    } catch (error) {
        res.redirect("/?mensaje=error");
    }
};

// Procesa la edición
export const handleUpdateNews = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, contenido, categoria } = req.body;
        await updateNews(id, { titulo, contenido, categoria });

        res.redirect("/?mensaje=editado");

    } catch (error) {
        res.redirect("/?mensaje=error");
    }
};

// Procesa la eliminación
export const handleDeleteNews = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteNews(id);
        
        res.redirect("/?mensaje=eliminado");

    } catch (error) {
        res.redirect("/?mensaje=error");
    }
};