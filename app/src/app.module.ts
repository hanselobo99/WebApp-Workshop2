import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiModule } from './api/api.module';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {dbconfig} from "./config/db.config"
import { ProductModule } from "./product/product.module";
@Module({
  imports: [
      TypeOrmModule.forRoot(dbconfig),
      ApiModule,ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
