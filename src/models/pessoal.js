import mongoose from "mongoose";
import momgoose from "mongoose";

const pessoaSchema = new mongoose.Schema({
        id:{type: String},
        nome:{type: String, required: true},
        cpf:{type: Number, required: true},
        idade:{type: Number, required: true}
    }
);

const pessoas = mongoose.model('pessoas', pessoaSchema)

export default pessoas;