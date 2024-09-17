import * as mongoose from 'mongoose';

export const ViagemSchema = new mongoose.Schema({
    nome: String,
    dataSaida: Date,
    dataChegada: Date,
    valor: Number,

})