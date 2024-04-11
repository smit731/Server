import { Experience } from "../schemas/companydata.schema";
export declare class UpdateCompanyDto {
    readonly companyId: string;
    readonly name: string;
    readonly location: string;
    readonly keywords: string[];
    readonly description: string;
    readonly experience: Experience;
}
