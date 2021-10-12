import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Hero } from './models/hero.interface';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'hello world';
  }

  @Get('call')
  async call() {
    return await this.appService.getHero();
  }
}
