import { Model } from 'mongoose';
import { Viagem } from './entities/viagem.entity';
import { UpdateViagemDto } from './dto/update-viagem.dto';
export declare class ViagemService {
    private readonly viagemModel;
    constructor(viagemModel: Model<Viagem>);
    getAll(): Promise<any[]>;
    getById(id: number): Promise<any[]>;
    create(viagem: Viagem): Promise<any>;
    update(id: string, viagem: UpdateViagemDto): Promise<any[]>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}
