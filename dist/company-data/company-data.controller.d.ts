import { CompanyDataService } from './company-data.service';
import { companyData } from './schemas/companydata.schema';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompanyDataController {
    private companyService;
    constructor(companyService: CompanyDataService);
    getAllUser(): Promise<companyData[]>;
    createUser(b: CreateCompanyDto): Promise<companyData>;
    getUser(userName: string): Promise<companyData>;
    updateBook(id: string, b: UpdateCompanyDto): Promise<companyData>;
    deleteBook(id: string): Promise<companyData>;
}
