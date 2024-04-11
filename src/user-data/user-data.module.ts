import { Module } from '@nestjs/common';
import { UserDataController } from './user-data.controller';
import { UserDataService } from './user-data.service';
import { UserSchema, userdata } from './schemas/userdata.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:'userdata',schema:UserSchema}])],
  controllers: [UserDataController],
  providers: [UserDataService]
})
export class UserDataModule {}
