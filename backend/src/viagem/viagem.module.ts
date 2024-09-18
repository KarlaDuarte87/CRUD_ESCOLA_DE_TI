import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ViagemService } from './viagem.service';
import { ViagemController } from './viagem.controller';
import {ViagemSchema,Viagem} from './schema/viagem.schema'
@Module({
  imports: [
    MongooseModule.forFeature([{name: Viagem.name, schema: ViagemSchema}])],
  controllers: [ViagemController],
  providers: [ViagemService],
})
export class ViagemModule {}


