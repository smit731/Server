"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDataModule = void 0;
const common_1 = require("@nestjs/common");
const company_data_controller_1 = require("./company-data.controller");
const company_data_service_1 = require("./company-data.service");
const mongoose_1 = require("@nestjs/mongoose");
const companydata_schema_1 = require("./schemas/companydata.schema");
let CompanyDataModule = class CompanyDataModule {
};
exports.CompanyDataModule = CompanyDataModule;
exports.CompanyDataModule = CompanyDataModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'companyData', schema: companydata_schema_1.CompanySchema }])],
        controllers: [company_data_controller_1.CompanyDataController],
        providers: [company_data_service_1.CompanyDataService]
    })
], CompanyDataModule);
//# sourceMappingURL=company-data.module.js.map