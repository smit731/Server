import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDataModule } from './user-data/user-data.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyDataModule } from './company-data/company-data.module';

@Module({
  imports: [UserDataModule,

    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    CompanyDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
