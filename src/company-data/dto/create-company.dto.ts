import { Experience } from "../schemas/companydata.schema";


export class CreateCompanyDto{
    readonly companyId:string;
    
    readonly name: string;

    
    readonly location: string;

    
    readonly keywords: string[];

    
    readonly description: string;

    
    readonly experience: Experience;
}