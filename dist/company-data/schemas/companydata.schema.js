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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySchema = exports.companyData = exports.Experience = void 0;
const mongoose_1 = require("@nestjs/mongoose");
class Experience {
}
exports.Experience = Experience;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Experience.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Experience.prototype, "passoutYear", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Experience.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Experience.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Experience.prototype, "onlineAssessmentDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Experience.prototype, "interviewDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Experience.prototype, "suggesstion", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Experience.prototype, "linkedinLink", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Experience.prototype, "mail", void 0);
let companyData = class companyData {
};
exports.companyData = companyData;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], companyData.prototype, "companyId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], companyData.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], companyData.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], companyData.prototype, "keywords", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], companyData.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Experience)
], companyData.prototype, "experience", void 0);
exports.companyData = companyData = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], companyData);
exports.CompanySchema = mongoose_1.SchemaFactory.createForClass(companyData);
//# sourceMappingURL=companydata.schema.js.map