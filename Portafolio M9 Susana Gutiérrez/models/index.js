/* Este archivo va a importar a los tres modelos, los va a presentar entre ellos y los va a exportar listos para usar */

import User from "./User.js";
import News from "./News.js";
import Comment from "./Comment.js";

// 1. Relación: Usuario -> Noticias (Un usuario tiene muchas noticias)
User.hasMany(News, { foreignKey: "usuarioId", as: "noticias" });
News.belongsTo(User, { foreignKey: "usuarioId", as: "autor" });

// 2. Relación: Usuario -> Comentarios (Un usuario escribe muchos comentarios)
User.hasMany(Comment, { foreignKey: "usuarioId", as: "comentarios" });
Comment.belongsTo(User, { foreignKey: "usuarioId", as: "autor" });

// 3. Relación: Noticia -> Comentarios (Una noticia tiene muchos comentarios)
News.hasMany(Comment, { foreignKey: "noticiaId", as: "comentarios" });
Comment.belongsTo(News, { foreignKey: "noticiaId", as: "noticia" });

export { User, News, Comment };