import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateViagemDto {
    @IsString({message: 'O campo de idKey da viagem deve ser uma string'})
    @IsNotEmpty({message: 'O campo do idKey da viagem não pode estar vazio'})
    idKey: string;


    @IsString({message: 'O campo de nome da viagem deve ser uma string'})
    @IsNotEmpty({message: 'O campo do nome da viagem não pode estar vazio'})
    nome: string;
    
    
    @IsNumber({message: 'O campo de valor deve ser numérico'})
    @IsNotEmpty({message: 'O campo de valor da viagem não pode estar vazio'})
    valor: number;


    @IsDate({message: 'O campo de Data de Saída da viagem não pode estar vazio'})
    @IsNotEmpty({message: 'O campo de Data de saída da viagem não pode estar vazio'})
    dataSaida: Date;  

    @IsDate({message: 'O campo de Data de chegada da viagem não pode estar vazio'})
    @IsNotEmpty('O campo de Data de saída da viagem não pode estar vazio')
    dataChegada: Date; 


}
