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
exports.UserDataService = void 0;
const common_1 = require("@nestjs/common");
const userdata_schema_1 = require("./schemas/userdata.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UserDataService = class UserDataService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll() {
        const b = await this.userModel.find();
        return b;
    }
    async create(b) {
        const res1 = await this.userModel.findOne({ email: b.email });
        console.log(res1);
        if (res1) {
            throw new common_1.NotFoundException('User is already exits');
        }
        const res = await this.userModel.create(b);
        return res;
    }
    async findByUserName(name) {
        const res = await this.userModel.findOne({ email: name });
        console.log(res);
        if (!res) {
            throw new common_1.NotFoundException('User is not found');
        }
        return res;
    }
    async updateByUserName(name, b) {
        const p = await this.userModel.findOne({ email: name });
        ;
        if (!p) {
            throw new common_1.NotFoundException('User is not found');
        }
        const res = await this.userModel.findOneAndUpdate({ email: name }, b, {
            new: true,
            runValidators: true,
        });
        return res;
    }
    async deleteByUserName(name) {
        const p = await this.userModel.findOne({ email: name });
        ;
        if (!p) {
            throw new common_1.NotFoundException('User is not found');
        }
        return await this.userModel.findOneAndDelete({ email: name });
    }
};
exports.UserDataService = UserDataService;
exports.UserDataService = UserDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(userdata_schema_1.userdata.name)),
    __metadata("design:paramtypes", [mongoose_2.default.Model])
], UserDataService);
//# sourceMappingURL=user-data.service.js.map