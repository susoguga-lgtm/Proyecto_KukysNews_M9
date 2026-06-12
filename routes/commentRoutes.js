import express from "express";
import { agregarComentario } from "../controllers/commentController.js";

const router = express.Router();

router.post("/noticias/:idNoticia/comentario", agregarComentario);

export default router;