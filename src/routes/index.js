import express from "express";
import imoveis from "./imoveisRouter.js";
import pessoas from "./pessoaRouter.js";
const routes = (app) =>{
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo:"API Imobiliaria"})
    })

    app.use(
        express.json(),
        imoveis, 
        pessoas
    ) 
}

export default routes;