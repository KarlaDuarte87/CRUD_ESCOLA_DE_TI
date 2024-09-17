import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateDestinoDto {

@IsString({message: 'O campo de idKey do destino deve ser uma string'})
@IsNotEmpty({message: 'O campo do idKey do destino não pode estar vazio'})
idKey: string;


@IsString({message: 'O campo de nome do destino deve ser uma string'})
@IsNotEmpty({message: 'O campo do nome do destino não pode estar vazio'})
nome: string;
}
