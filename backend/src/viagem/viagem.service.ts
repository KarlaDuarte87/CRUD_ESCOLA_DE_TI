import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Viagem } from './entities/viagem.entity';
import { UpdateViagemDto } from './dto/update-viagem.dto';

@InjectModel()
export class ViagemService{

  constructor(@InjectModel('Viagem') private readonly viagemModel: Model<Viagem>){}

  async getAll(){
    return await this.viagemModel.find().exec();
  }

  async getById(id: number){
    return await this.viagemModel.find(id).exec();
  }

  async create(viagem: Viagem){
    const createViagem = new this.viagemModel(viagem);
    return await createViagem.save();

  }

  async update(id: string, viagem: UpdateViagemDto){
    await this.viagemModel.updateOne({_id: id}, UpdateViagemDto, {new : true});
  return this.getById(id);
}

async delete(id: string){
  return await this.viagemModel.deleteOne({_id:id}).exec();
}

};