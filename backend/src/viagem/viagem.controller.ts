import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ViagemService } from './viagem.service';
import { Viagem } from './entities/viagem.entity';

@Controller('viagem')
export class ViagemController {
  constructor(private readonly viagemService: ViagemService) {}


  @Post()
  async create(@Body() viagem: Viagem): Promise<Viagem> {
    return this.viagemService.create(viagem);
  }

  @Get()
  async findAll() {
   return this.viagemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.viagemService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() viagem: Viagem) {
    return this.viagemService.update(+id, viagem);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.viagemService.remove(+id);
  }
}
/* fazer as seguintes rotas: 

- get all
- get id
- get nome
- get data de saida
- get data de chegada
- get destino
- get valor 

*/