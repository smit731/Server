import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { companyData } from './schemas/companydata.schema';
import mongoose from 'mongoose';

@Injectable()
export class CompanyDataService {

    constructor(
        @InjectModel(companyData.name)
        private companyModel: mongoose.Model<companyData>,

    ) {}

    async findAll(): Promise<companyData[]> {

        const b = await this.companyModel.find()
        return b;
    }

    async create(b: companyData): Promise<companyData> {
       const res1 = await this.companyModel.findOne({ companyId: b.companyId });
        console.log(res1);
        if (res1) {
            throw new NotFoundException('Company is already exits');
        }

        const res = await this.companyModel.create(b);
        return res;
    }
    async findByCompanyId(id: string): Promise<companyData> {

        const res = await this.companyModel.findOne({ companyId: id });
        console.log(res);
        if (!res) {
            throw new NotFoundException('Company is not found');
        }
        return res;
    }

    async updateByCompanyId(id: string, b: companyData): Promise<companyData> {

        const p = await this.companyModel.findOne({ companyId: id });;
        if (!p) {
            throw new NotFoundException('User is not found');
        }
        const res = await this.companyModel.findOneAndUpdate({companyId: id   }, b, {

            new: true,
            runValidators: true,
        });
        return res;
    }

    async deleteByCompanyName(id: string,): Promise<companyData> {
        const p = await this.companyModel.findOne({companyId: id  });;
        if (!p) {
            throw new NotFoundException('User is not found');
        }
        return await this.companyModel.findOneAndDelete({ companyId: id  });
    }




}
