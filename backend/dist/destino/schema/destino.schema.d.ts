import { Document } from 'mongoose';
export declare class Destino extends Document {
    d: any;
    nome: string;
}
export declare const DestinoSchema: import("mongoose").Schema<Destino, import("mongoose").Model<Destino, any, any, any, Document<unknown, any, Destino> & Destino & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Destino, Document<unknown, {}, import("mongoose").FlatRecord<Destino>> & import("mongoose").FlatRecord<Destino> & Required<{
    _id: unknown;
}>>;
