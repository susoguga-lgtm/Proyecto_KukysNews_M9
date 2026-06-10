//Aquí definiremos qué datos necesitamos para que la gente se registre.

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // ¡No queremos dos usuarios con el mismo correo!
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "usuarios",
    timestamps: true // Esto nos crea automáticamente las columnas "createdAt" y "updatedAt"
});

export default User;