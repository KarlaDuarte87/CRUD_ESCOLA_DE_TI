"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateViagemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_viagem_dto_1 = require("./create-viagem.dto");
class UpdateViagemDto extends (0, mapped_types_1.PartialType)(create_viagem_dto_1.CreateViagemDto) {
}
exports.UpdateViagemDto = UpdateViagemDto;
//# sourceMappingURL=update-viagem.dto.js.map