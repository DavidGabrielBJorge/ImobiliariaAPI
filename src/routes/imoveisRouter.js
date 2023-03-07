import express from "express";
import ImovelController from "../controller/imoveisController.js";

const router = express.Router();

router.get("/imoveis", ImovelController.listarTodos)
      .get("/imoveis/:id", ImovelController.listarPorId)
      .post("/imoveis", ImovelController.cadastrar)
      .put("/imoveis/:id", ImovelController.atualizar)
      .delete("/imoveis/:id", ImovelController.deletar)

export default router