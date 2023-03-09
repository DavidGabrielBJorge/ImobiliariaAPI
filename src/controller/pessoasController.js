import pessoas from "../models/pessoa.js";

class PessoaController{

    /*
    {
        "nome": "Maria Clara",
        "cpf": 444455555,
        "idade": 32
    }
    */
    static listarTodos = (req, res) =>{
        pessoas.find((err,pessoas)=>{
        res.status(200).json(pessoas);
        })
    }

    static listarPorId = (req,res) => {
        const id = req.params.id;
        
        pessoas.findById(id).exec((err, livros) => {
            if(err){
                res.status(400).send({message:`${err.message} - Id da Pessoa não localizado.`})
            }else{
                res.status(200).send(livros);
            }
        })
    }

    static cadastrar = (req, res) => {
        let Pessoa = new pessoas(req.body);
        Pessoa.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar Pessoa!`});
            }else{
                res.status(201).send(Pessoa.toJSON());
            }
        })
    }

    static atualizar = (req, res) => {
        const id = req.params.id;

        pessoas.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: 'Pessoa atualizada com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

    static deletar = (req, res) =>{
        const id = req.params.id;

        pessoas.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message:"Pessoa removida com sucesso"});
            }else{
                res.status(500).send({message: `${err.message} - Erro com o id`});
            }
        })
    }
}

export default PessoaController;