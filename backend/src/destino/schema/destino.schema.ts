import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Destino extends Document {d
  @Prop({ required: true })
  nome: string;

}

export const DestinoSchema = SchemaFactory.createForClass(Destino);

