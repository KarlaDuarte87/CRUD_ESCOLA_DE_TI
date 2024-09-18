import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateViagemDto {
    @IsString()
    @IsNotEmpty()
    idKey: string;


    @IsString()
    @IsNotEmpty()
    nome: string;
    
    
    @IsNumber()
    @IsNotEmpty()
    valor: number;


    @IsDate()
    @IsNotEmpty()
    dataSaida: Date;  

    @IsDate()
    @IsNotEmpty()
    dataChegada: Date; 


}
