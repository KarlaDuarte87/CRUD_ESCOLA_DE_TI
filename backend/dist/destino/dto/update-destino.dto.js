"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDestinoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_destino_dto_1 = require("./create-destino.dto");
class UpdateDestinoDto extends (0, mapped_types_1.PartialType)(create_destino_dto_1.CreateDestinoDto) {
}
exports.UpdateDestinoDto = UpdateDestinoDto;
//# sourceMappingURL=update-destino.dto.js.map