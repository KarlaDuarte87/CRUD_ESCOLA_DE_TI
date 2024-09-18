import { Document } from 'mongoose';
export declare class Viagem extends Document {
    nome: string;
    dataSaida: Date;
    dataChegada: Date;
    valor: number;
}
export declare const ViagemSchema: import("mongoose").Schema<Viagem, import("mongoose").Model<Viagem, any, any, any, Document<unknown, any, Viagem> & Viagem & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Viagem, Document<unknown, {}, import("mongoose").FlatRecord<Viagem>> & import("mongoose").FlatRecord<Viagem> & Required<{
    _id: unknown;
}>>;
