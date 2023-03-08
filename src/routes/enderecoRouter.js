import express from "express";
import enderecoController from "../controller/enderecosController.js";
const router = express.Router();

router.get("/enderecos", enderecoController.listarTodos)
      .get("/enderecos/:id", enderecoController.listarPorId)
      .post("/enderecos", enderecoController.cadastrar)
      .put("/enderecos/:id", enderecoController.atualizar)
      .delete("/enderecos/:id", enderecoController.deletar)

export default router