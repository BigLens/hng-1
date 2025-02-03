import { Injectable } from "@nestjs/common";

@Injectable()
export class SumOfDigit{
    digitSum(num : number): number{
        return String(num).split('').reduce((acc, c) => acc + Number(c), 0);
      }
}