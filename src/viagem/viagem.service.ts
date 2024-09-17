import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { CreateViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagem.dto';
import { Viagem } from './entities/viagem.entity';

@Injectable()
export class ViagemService {

  constructor(
    @InjectRepository(Viagem)
    private readonly viagemRepository: Repository<Viagem>,
  ){}


  async create(createViagemDto: CreateViagemDto) {
    const viagem = await this.viagemRepository.create(CreateViagemDto);
    return this.viagemRepository.save(viagem);

  }

  async findAll(): Promise<Viagem[]> {
    return await this.viagemRepository.find();
  }

  async findOne(id: number): Promise<Viagem>{
    const viagem = await this.viagemRepository.findOne({where:{idKey: id}});
    if(!viagem){
      throw new NotFoundException('Viagem não localizada');
    }
    return viagem;
  }

  async update(id: number, data: Viagem): Promise<Viagem>{
    await this.viagemRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number):Promise<void>{
    const viagem = await this.findOne(id);
    await this.viagemRepository.remove(viagem);
  }
}

/*
métodos:
adicionar destino
remover destino
cadastrar nome
cadastrar data
cadastrar valor (usar a formatação de valor)
*/