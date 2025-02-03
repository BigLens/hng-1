import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ArmStrong } from './app/services/armstrong.service';
import { SumOfDigit } from './app/services/digitSum.service';
import { FunFactApi } from './app/services/funfactFetch.service';
import { PerfectNumber } from './app/services/perfectnum.service';
import { PrimeNumber } from './app/services/primenum.service';


@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, ArmStrong, SumOfDigit, FunFactApi, PerfectNumber, PrimeNumber],
})
export class AppModule {}
