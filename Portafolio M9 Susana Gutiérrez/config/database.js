import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

// 1. Funcion para crear la base de datos si no existe
export const createDatabaseIfNotExists = async () => {
    const client = new pg.Client({
        connectionString: process.env.DEFAULT_DATABASE_URL
    });
    try {
        await client.connect();
        const res = await client.query("SELECT 1 FROM pg_database WHERE datname = 'kuky_news_db'");
        if (res.rowCount === 0) {
            await client.query('CREATE DATABASE "kuky_news_db"');
            console.log("Base de datos creada exitosamente.");
        } else {
            console.log("La base de datos ya existe.");
        }
    } catch (error) {
        console.error(`Error al gestionar la base de datos: ${error.message}`);
    } finally {
        await client.end();
    }
};

// 2. Configuracion de Sequelize
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: false
});

 

// 3. Funcion para probar la conexion
export const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexion exitosa con la base de datos de Kuky's News.");
    } catch (error) {
        console.error(`Error al conectar con la base de datos: ${error.message}`);
    }
};

export default sequelize;