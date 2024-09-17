import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateViagemDto {
    @IsString({'O campo de idKey da viagem deve ser uma string'})
    @IsNotEmpty({'O campo do idKey da viagem não pode estar vazio'})
    idKey: string;


    @IsString({'O campo de nome da viagem deve ser uma string'})
    @IsNotEmpty({'O campo do nome da viagem não pode estar vazio'})
    nome: string;
    
    
    @IsNumber('O campo de valor deve ser numérico')
    @IsNotEmpty('O campo de valor da viagem não pode estar vazio')
    valor: number;


    @IsDate('O campo de Data de Saída da viagem não pode estar vazio')
    @IsNotEmpty('O campo de Data de saída da viagem não pode estar vazio')
    dataSaida: Date;  

    @IsDate('O campo de Data de chegada da viagem não pode estar vazio')
    @IsNotEmpty('O campo de Data de saída da viagem não pode estar vazio')
    dataChegada: Date; 


}
