import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';
export declare class DestinoService {
    create(createDestinoDto: CreateDestinoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDestinoDto: UpdateDestinoDto): string;
    remove(id: number): string;
}
