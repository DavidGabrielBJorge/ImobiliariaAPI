import imoveis from "../models/imovel.js";

class ImovelController{

    /*
    {
    "valor": 24000,
    "endereco": "Rua das flores",
    "pessoa": "Clara",
    "acao": "Vender"
    }
    */
    static listarTodos = (req, res) =>{
        imoveis.find().populate("pessoa").populate("endereco").exec((err,imoveis)=>{
        res.status(200).json(imoveis);
        })
    }

    static listarPorId = (req,res) => {
        const id = req.params.id;
        
        imoveis.findById(id).populate("pessoa","nome").populate("endereco","rua").exec((err, livros) => {
            if(err){
                res.status(400).send({message:`${err.message} - Id do imovel não localizado.`})
            }else{
                res.status(200).send(livros);
            }
        })
    }

    static cadastrar = (req, res) => {
        let imovel = new imoveis(req.body);
        //Para resolver o bug do ID de não conseguir encontrar o ID da pessoa, deve remover os espaços em branco
        const FKPessoa = req.body.pessoa
        const FKEndereco = req.body.endereco

        FKPessoa.trim();
        FKEndereco.trim();

        console.log(req.body.pessoa)

        req.body.pessoa=FKPessoa
        req.body.endereco=FKEndereco
        


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

    static deletar = (req, res) =>{
        const id = req.params.id;

        imoveis.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message:"Imovel removido com sucesso"});
            }else{
                res.status(500).send({message: `${err.message} - Erro com o id`});
            }
        })
    }
}

export default ImovelController;