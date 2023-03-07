import imoveis from "../models/imovel.js";

class ImovelController{

    static listarTodos = (req, res) =>{
        imoveis.find((err,imoveis)=>{
        res.status(200).json(imoveis);
        })
    }

    static cadastrar = (req, res) => {
        let imovel = new imoveis(req.body);
        imovel.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar imovel!`});
            }else{
                res.status(201).send(imovel.toJSON());
            }
        })
    }

    static atualizar = (req, res) => {
        const id = req.params.id;

        imoveis.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: 'Imovel atualizado com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }
}

export default ImovelController;