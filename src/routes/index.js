import express from "express";
import imoveis from "./imoveisRouter.js";
import pessoas from "./pessoaRouter.js";
import enderecos from "./enderecoRouter.js";
const routes = (app) =>{
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo:"API Imobiliaria"})
    })

    app.use(
        express.json(),
        imoveis, 
        pessoas,
        enderecos
    ) 
}

export default routes;