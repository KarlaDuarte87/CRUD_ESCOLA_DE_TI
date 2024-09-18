import { ViagemService } from './viagem.service';
import { Viagem } from './schema/viagem.schema';
export declare class ViagemController {
    private readonly viagemService;
    constructor(viagemService: ViagemService);
    create(viagem: Viagem): Promise<Viagem>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any[]>;
    update(id: string, viagem: Viagem): Promise<any[]>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
