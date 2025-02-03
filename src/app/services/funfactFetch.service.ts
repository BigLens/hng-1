import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class FunFactApi{
    constructor(private readonly httpservice: HttpService){}
    async fetchFunFact(num: number): Promise<string>{
        try {
          const url = `http://numbersapi.com/${num}/math`;
          const response = await firstValueFrom(this.httpservice.get(url));
          return response.data;
        } catch (error) {
          return "unable to fetch fun fact.";
        }
      }
}