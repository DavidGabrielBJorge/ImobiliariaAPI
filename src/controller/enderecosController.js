import enderecos from "../models/endereco.js";

class enderecoController{

    /*
    {
        "cidade": "São Paulo",
        "bairro": "centro",
        "rua": "Rua da Matina"
    }
    */
    static listarTodos = (req, res) =>{
        enderecos.find((err,enderecos)=>{
        res.status(200).json(enderecos);
        })
    }

    static listarPorId = (req,res) => {
        const id = req.params.id;
        
        enderecos.findById(id).exec((err, livros) => {
            if(err){
                res.status(400).send({message:`${err.message} - Id da Endereco não localizado.`})
            }else{
                res.status(200).send(livros);
            }
        })
    }

    static cadastrar = (req, res) => {
        let Endereco = new enderecos(req.body);
        Endereco.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar Endereco!`});
            }else{
                res.status(201).send(Endereco.toJSON());
            }
        })
    }

    static atualizar = (req, res) => {
        const id = req.params.id;

        enderecos.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: 'Endereco atualizada com sucesso'});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

    static deletar = (req, res) =>{
        const id = req.params.id;

        enderecos.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message:"Endereco removida com sucesso"});
            }else{
                res.status(500).send({message: `${err.message} - Erro com o id`});
            }
        })
    }
}

export default enderecoController;