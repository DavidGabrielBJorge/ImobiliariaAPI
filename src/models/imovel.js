import mongoose from "mongoose";

const imovelSchema = new mongoose.Schema({
    id: {type: String},
    valor: {type: Number, required: true},
    endereco: {type: String, required: true},
    pessoa: {type: mongoose.Schema.Types.ObjectId, ref: 'pessoas', required: true},
    acao: {type: String, required: true}
});

const imoveis = mongoose.model('imoveis', imovelSchema);

export default imoveis;