//Aquí definiremos la estructura de cada artículo que se publique en Kuky's News.

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const News = sequelize.define("News", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido: {
        type: DataTypes.TEXT, // Usamos TEXT en vez de STRING porque las noticias son largas
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "General"
    }
}, {
    tableName: "noticias",
    timestamps: true 
});

export default News;