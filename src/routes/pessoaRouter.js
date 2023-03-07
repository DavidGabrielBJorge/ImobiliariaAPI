import express from "express";
import PessoaController from "../controller/pessoasController.js";
const router = express.Router();

router.get("/pessoas", PessoaController.listarTodos)
      .get("/pessoas/:id", PessoaController.listarPorId)
      .post("/pessoas", PessoaController.cadastrar)
      .put("/pessoas/:id", PessoaController.atualizar)
      .delete("/pessoas/:id", PessoaController.deletar)

export default router