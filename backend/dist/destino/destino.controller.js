"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinoController = void 0;
const common_1 = require("@nestjs/common");
const destino_service_1 = require("./destino.service");
const create_destino_dto_1 = require("./dto/create-destino.dto");
const update_destino_dto_1 = require("./dto/update-destino.dto");
let DestinoController = class DestinoController {
    constructor(destinoService) {
        this.destinoService = destinoService;
    }
    create(createDestinoDto) {
        return this.destinoService.create(createDestinoDto);
    }
    findAll() {
        return this.destinoService.findAll();
    }
    findOne(id) {
        return this.destinoService.findOne(+id);
    }
    update(id, updateDestinoDto) {
        return this.destinoService.update(+id, updateDestinoDto);
    }
    remove(id) {
        return this.destinoService.remove(+id);
    }
};
exports.DestinoController = DestinoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_destino_dto_1.CreateDestinoDto]),
    __metadata("design:returntype", void 0)
], DestinoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DestinoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DestinoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_destino_dto_1.UpdateDestinoDto]),
    __metadata("design:returntype", void 0)
], DestinoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DestinoController.prototype, "remove", null);
exports.DestinoController = DestinoController = __decorate([
    (0, common_1.Controller)('destino'),
    __metadata("design:paramtypes", [destino_service_1.DestinoService])
], DestinoController);
//# sourceMappingURL=destino.controller.js.map