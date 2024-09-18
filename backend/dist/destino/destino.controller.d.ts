import { DestinoService } from './destino.service';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';
export declare class DestinoController {
    private readonly destinoService;
    constructor(destinoService: DestinoService);
    create(createDestinoDto: CreateDestinoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDestinoDto: UpdateDestinoDto): string;
    remove(id: string): string;
}
