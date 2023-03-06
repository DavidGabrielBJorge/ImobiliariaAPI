import express from "express";
import ImovelController from "../controller/imoveisController.js";

const router = express.Router();

router.get("/imoveis", ImovelController.listarTodos)
      .post("/imoveis", ImovelController.cadastrar)

export default router