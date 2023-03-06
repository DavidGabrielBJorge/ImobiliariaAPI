import express from "express";
import ImovelController from "../controller/imoveisController.js";

const router = express.Router();

router.get("/imoveis", ImovelController.listarTodos)

export default router