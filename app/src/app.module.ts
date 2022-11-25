import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiModule } from './api/api.module';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {dbconfig} from "./config/db.config"
@Module({
  imports: [
      TypeOrmModule.forRoot(dbconfig),
      ApiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
