import mongoose from "mongoose";

const enderecoSchema = new mongoose.Schema({
    id: {type: String},
    cidade: {type: String, required: true},
    bairro: {type: String, required: true},
    rua: {type: String, required: true},
});

const enderecos = mongoose.model('enderecos', enderecoSchema);

export default enderecos;