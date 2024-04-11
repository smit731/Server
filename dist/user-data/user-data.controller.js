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
exports.UserDataController = void 0;
const common_1 = require("@nestjs/common");
const user_data_service_1 = require("./user-data.service");
const common_2 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
let UserDataController = class UserDataController {
    constructor(userDataService) {
        this.userDataService = userDataService;
    }
    async getAllUser() {
        return this.userDataService.findAll();
    }
    async createUser(b) {
        return this.userDataService.create(b);
    }
    async getUser(userName) {
        return this.userDataService.findByUserName(userName);
    }
    async updateUser(userName, b) {
        return this.userDataService.updateByUserName(userName, b);
    }
    async deleteUser(userName) {
        return this.userDataService.deleteByUserName(userName);
    }
};
exports.UserDataController = UserDataController;
__decorate([
    (0, common_2.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserDataController.prototype, "getAllUser", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserDataController.prototype, "createUser", null);
__decorate([
    (0, common_2.Get)(':userName'),
    __param(0, (0, common_2.Param)('userName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserDataController.prototype, "getUser", null);
__decorate([
    (0, common_2.Put)(':userName'),
    __param(0, (0, common_2.Param)('userName')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserDataController.prototype, "updateUser", null);
__decorate([
    (0, common_2.Delete)(':userName'),
    __param(0, (0, common_2.Param)('userName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserDataController.prototype, "deleteUser", null);
exports.UserDataController = UserDataController = __decorate([
    (0, common_1.Controller)('user-data'),
    __metadata("design:paramtypes", [user_data_service_1.UserDataService])
], UserDataController);
//# sourceMappingURL=user-data.controller.js.map