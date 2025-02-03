import { Injectable } from "@nestjs/common";

@Injectable()
export class ArmStrong{
    armStrong(num : number): boolean{
        const numero = String(num).split('');
        const sumUp = numero.reduce((
        acc, c) => acc + Math.pow(Number(c), numero.length), 0);
        return sumUp === num;
      }
}