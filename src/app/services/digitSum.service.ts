import { Injectable } from "@nestjs/common";

@Injectable()
export class SumOfDigit{
    digitSum(number : number): number {
       // return String(num).split('').reduce((acc, c) => acc + Number(c), 0);
       return Math.abs(number)
       .toString()
       .split('')
       .map(Number)
       .reduce( (sum, digit) => sum + digit, 0);
}
}