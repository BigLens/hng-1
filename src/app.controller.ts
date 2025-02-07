import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('classify-number')
  async getNumberApi(@Query('number') number: string ){
    const num = Number(number);

    if (!number) {
      throw new BadRequestException({
        number: 'No number. Input a number!',
        error: true,
      });
    }
    
    if(isNaN(num)){
      throw new BadRequestException({
        number: "alphabet",
        error: true,
      });
    }

    if (!Number.isInteger(num)) {
      throw new BadRequestException({
        number: 'float',
        error: true,
      });
    }
    return this.appService.numClassify(num);
  }
}
