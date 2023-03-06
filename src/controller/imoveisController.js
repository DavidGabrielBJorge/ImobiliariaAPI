import imoveis from "../models/imovel.js";

class ImovelController{

    static listarTodos = (req, res) =>{
        imoveis.find((err,imoveis)=>{
        res.status(200).json(imoveis);
    })
    }
}

export default ImovelController;