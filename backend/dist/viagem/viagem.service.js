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
exports.ViagemService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const update_viagem_dto_1 = require("./dto/update-viagem.dto");
let ViagemService = class ViagemService {
    constructor(viagemModel) {
        this.viagemModel = viagemModel;
    }
    async getAll() {
        return await this.viagemModel.find().exec();
    }
    async getById(id) {
        return await this.viagemModel.find(id).exec();
    }
    async create(viagem) {
        const createViagem = new this.viagemModel(viagem);
        return await createViagem.save();
    }
    async update(id, viagem) {
        await this.viagemModel.updateOne({ _id: id }, update_viagem_dto_1.UpdateViagemDto, { new: true });
        return this.getById(id);
    }
    async delete(id) {
        return await this.viagemModel.deleteOne({ _id: id }).exec();
    }
};
exports.ViagemService = ViagemService;
exports.ViagemService = ViagemService = __decorate([
    (0, mongoose_1.InjectModel)(),
    __param(0, (0, mongoose_1.InjectModel)('Viagem')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ViagemService);
;
//# sourceMappingURL=viagem.service.js.map