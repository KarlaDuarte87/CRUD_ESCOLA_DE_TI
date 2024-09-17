import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViagemModule } from './viagem/viagem.module';
import { DestinoModule } from './destino/destino.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Viagem'), 
    ViagemModule,
     DestinoModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
