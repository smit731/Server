import { Controller } from '@nestjs/common';
import { CompanyDataService } from './company-data.service';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { companyData } from './schemas/companydata.schema';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
@Controller('company-data')
export class CompanyDataController {

    constructor(private companyService : CompanyDataService){}

    @Get()
    async getAllUser() :Promise<companyData[]>{

        return this.companyService.findAll();
    }

    @Post()
    async createUser(@Body() b:CreateCompanyDto,):Promise<companyData>{
        return this.companyService.create(b);
    }

    @Get(':id')
    async getUser(@Param('id') userName:string) :Promise<companyData>{

        return this.companyService.findByCompanyId(userName);
    }

    @Put(':id')
    async updateBook(
        @Param('id')
        id:string,
        @Body()
        b:UpdateCompanyDto,
    ):Promise<companyData>{

        return this.companyService.updateByCompanyId(id,b);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id:string,):Promise<companyData>
    {
        return this.companyService.deleteByCompanyName(id);
         
    }


}
