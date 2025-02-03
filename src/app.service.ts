import { Injectable } from '@nestjs/common';
import { ArmStrong } from './app/services/armstrong.service';
import { PrimeNumber } from './app/services/primenum.service';
import { PerfectNumber } from './app/services/perfectnum.service';
import { SumOfDigit } from './app/services/digitSum.service';
import { FunFactApi } from './app/services/funfactFetch.service';

@Injectable()
export class AppService {
constructor(
  private readonly armStrong: ArmStrong,
  private readonly prime: PrimeNumber,
  private readonly perfect: PerfectNumber,
  private readonly digitsum: SumOfDigit,
  private readonly funfact: FunFactApi,
){}


//function to classify the number
async numClassify(num : number){
  const isPrime = this.prime.prime(num);
  const isPerfect = this.perfect.perfectNum(num);
  const isArmstrong = this.armStrong.armStrong(num);
  const digitsSum = this.digitsum.digitSum(num);
  const isOdd = num % 2 !== 0;
  const properties = [];
  if (isArmstrong)properties.push('armstrong')
  properties.push(isOdd ? 'odd' : 'even');
  const funFact = await this.funfact.fetchFunFact(num);


  return {
    number: num,
    is_prime: isPrime,
    is_perfect: isPerfect,
    properties,
    digit_sum: digitsSum,
    fun_fact: funFact
  }
}
}