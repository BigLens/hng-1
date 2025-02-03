import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/classify-number')
  async getNumberApi(@Query('number') number: string ){
    const num = Number(number);
    if(isNaN(num)){
      throw new BadRequestException({
        number: "alphabet",
        error: true,
      });
    }
    return this.appService.numClassify(num);
  }
}
