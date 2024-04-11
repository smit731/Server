import { Module } from '@nestjs/common';
import { CompanyDataController } from './company-data.controller';
import { CompanyDataService } from './company-data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema, companyData } from './schemas/companydata.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'companyData',schema:CompanySchema}])],
  controllers: [CompanyDataController],
  providers: [CompanyDataService]
})
export class CompanyDataModule {}
