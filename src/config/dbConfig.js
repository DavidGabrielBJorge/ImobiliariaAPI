import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:123@imobiliaria.omr2cpd.mongodb.net/imobiliaria");

let db = mongoose.connection;

export default db;