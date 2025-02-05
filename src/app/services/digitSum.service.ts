import { Injectable } from "@nestjs/common";

@Injectable()
export class SumOfDigit{
    digitSum(number : number): number {
       return Math.abs(number)
       .toString()
       .split('')
       .map(Number)
       .reduce( (sum, digit) => sum + digit, 0);
}
}