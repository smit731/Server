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
exports.CompanyDataController = void 0;
const common_1 = require("@nestjs/common");
const company_data_service_1 = require("./company-data.service");
const common_2 = require("@nestjs/common");
const create_company_dto_1 = require("./dto/create-company.dto");
const update_company_dto_1 = require("./dto/update-company.dto");
let CompanyDataController = class CompanyDataController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async getAllUser() {
        return this.companyService.findAll();
    }
    async createUser(b) {
        return this.companyService.create(b);
    }
    async getUser(userName) {
        return this.companyService.findByCompanyId(userName);
    }
    async updateBook(id, b) {
        return this.companyService.updateByCompanyId(id, b);
    }
    async deleteBook(id) {
        return this.companyService.deleteByCompanyName(id);
    }
};
exports.CompanyDataController = CompanyDataController;
__decorate([
    (0, common_2.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyDataController.prototype, "getAllUser", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_company_dto_1.CreateCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyDataController.prototype, "createUser", null);
__decorate([
    (0, common_2.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyDataController.prototype, "getUser", null);
__decorate([
    (0, common_2.Put)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_company_dto_1.UpdateCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyDataController.prototype, "updateBook", null);
__decorate([
    (0, common_2.Delete)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyDataController.prototype, "deleteBook", null);
exports.CompanyDataController = CompanyDataController = __decorate([
    (0, common_1.Controller)('company-data'),
    __metadata("design:paramtypes", [company_data_service_1.CompanyDataService])
], CompanyDataController);
//# sourceMappingURL=company-data.controller.js.map