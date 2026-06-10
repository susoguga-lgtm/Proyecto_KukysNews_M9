//Aquí es donde vamos a recibir los datos del nuevo usuario, revisar que el correo no exista ya, encriptar su contraseña y guardarlo en la base de datos.

import bcrypt from "bcryptjs";
import { User } from "../models/index.js";
import jwt from "jsonwebtoken";

export const registerUser = async (nombre, email, password) => {
    try {
        // 1. Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { email } }); 

        if (existingUser) {
            throw new Error("El correo ya esta registrado en el sistema.");
        }

        // 2. Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Guardar en la base de datos
        const newUser = await User.create({
            nombre: nombre,
            email: email,
            password: hashedPassword
        });

        return newUser;

    } catch (error) {

        throw new Error(`Error en el servicio de registro: ${error.message}`);
    }
};

export const loginUser = async (email, password) => {
    try {
        // 1. Verificar si el usuario existe en la base de datos
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error("Credenciales invalidas. El correo no existe.");
        }

        // 2. Comparar la contraseña que ingreso con la encriptada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Credenciales invalidas. Contraseña incorrecta.");
        }

        // 3. Generar el Token de seguridad (JWT)
        const token = jwt.sign(
            { id: user.id, email: user.email, nombre: user.nombre },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
        );

        return token;
    } catch (error) {
        throw new Error(error.message);
    }
};