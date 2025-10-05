import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { iTracks } from './app.service';

@Controller('api') // prefijo opcional
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('tracks')
  getTracks(): iTracks[] {
    return this.appService.getTracks();
  }
}

