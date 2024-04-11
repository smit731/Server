import { Controller } from '@nestjs/common';
import { UserDataService } from './user-data.service';
import { userdata } from './schemas/userdata.schema';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user-data')
export class UserDataController {

    constructor(private userDataService : UserDataService){}

    @Get()
    async getAllUser() :Promise<userdata[]>{

        return this.userDataService.findAll();
    }

    @Post()

    async createUser(@Body() b:CreateUserDto,):Promise<userdata>{
        return this.userDataService.create(b);
    }

    @Get(':userName')
    async getUser(@Param('userName') userName:string) :Promise<userdata>{

        return this.userDataService.findByUserName(userName);
    }

    @Put(':userName')
    async updateUser(
        @Param('userName')
        userName:string,
        @Body()
        b:UpdateUserDto,
    ):Promise<userdata>{

        return this.userDataService.updateByUserName(userName,b);
    }

    @Delete(':userName')
    async deleteUser(@Param('userName') userName:string,):Promise<userdata>
    {
        return this.userDataService.deleteByUserName(userName);
         
    }


    
   
    
}
