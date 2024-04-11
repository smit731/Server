import { Injectable, NotFoundException } from '@nestjs/common';
import { userdata } from './schemas/userdata.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class UserDataService {
    constructor(
        @InjectModel(userdata.name)
        private userModel: mongoose.Model<userdata>,

    ) {}

    async findAll(): Promise<userdata[]> {

        const b = await this.userModel.find()
        return b;

    }


    async create(b: userdata): Promise<userdata> {
        const res1 = await this.userModel.findOne({ email: b.email });
        console.log(res1);
        if (res1) {
            throw new NotFoundException('User is already exits');
        }

        const res = await this.userModel.create(b);
        return res;
    }

    async findByUserName(name: string): Promise<userdata> {

        const res = await this.userModel.findOne({ email: name });
        console.log(res);
        if (!res) {
            throw new NotFoundException('User is not found');
        }
        return res;
    }

    async updateByUserName(name: string, b: userdata): Promise<userdata> {

        const p = await this.userModel.findOne({ email: name });;
        if (!p) {
            throw new NotFoundException('User is not found');
        }
        const res = await this.userModel.findOneAndUpdate({email: name  }, b, {

            new: true,
            runValidators: true,
        });
        return res;
    }

    async deleteByUserName(name: string,): Promise<userdata> {
        const p = await this.userModel.findOne({ email: name  });;
        if (!p) {
            throw new NotFoundException('User is not found');
        }
        return await this.userModel.findOneAndDelete({ email: name  });
    }


}
