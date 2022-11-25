import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

    constructor(
        private readonly apiService: AppService
    ) {}

    @Get("/index")
    getHello() : string {
        return this.apiService.getHello();
    }
    @Get('/welcome')
    getWelcome(): string{
        return this.apiService.getWelcome()
    }

}