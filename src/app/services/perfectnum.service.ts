import { Injectable } from "@nestjs/common";

@Injectable()
export class PerfectNumber{
    perfectNum(num : number): boolean{
        if(num < 2) return false;
        let sum = 1;
        for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++){
            if(num % i === 0){
                sum += i + num / i;
            }
        }
        return sum === num;
    }
    
}