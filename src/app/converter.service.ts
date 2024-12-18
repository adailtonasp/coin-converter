import {v4 as uuid} from 'uuid';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Coin} from './coin';
import {PairConversion} from './pair-conversion';
import {HistoryElement} from './history-element';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ConverterService {

  private urlApiListing : string;

  private urlApiConvertion : string;

  private storage : Storage;

  response : PairConversion | undefined;

  constructor(private http : HttpClient) { 

    this.urlApiListing = "http://localhost:3000/supportedCurrencies";

    this.urlApiConvertion = "https://v6.exchangerate-api.com/v6/b5b124ab1e184aa005e6d33c/pair";

    this.storage = window.localStorage;
    
  }

  //npx json-server --watch ./suported_coins.json
  async coinListing() : Promise<Coin[]> {
    const data = await fetch(this.urlApiListing);
    return await data.json() ?? []; //trocar para o angular httpcliente
  }

  coinConverter(base: string, target : string) : PairConversion | undefined{
    // const data = await fetch(`${this.urlApiConvertion}/${base}/${target}`);
    // return await data.json();

    const req =  this.http.get<PairConversion>(`${this.urlApiConvertion}/${base}/${target}`);

    req.subscribe(data => this.response = {...data})

    console.log('converter service',this.response?.conversion_rate);

    return this.response;
  }

  saveHistory(valor : number, moeda_base: string, moeda_alvo : string, resultado : number, taxa : number ){
    const data = new Date();

    const data_convertion : HistoryElement = {
      data_conversao : `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear}`,
      hora_conversao : `${data.getHours}:${data.getMinutes()}`,
      valor,
      moeda_base,
      moeda_alvo,
      resultado,
      taxa,
      ativo : true
    }

    this.storage.setItem(uuid(),JSON.stringify(data_convertion))

  }

  getAllHistory() : HistoryElement[]{
    const historyList : HistoryElement[]= [];

    for(let i = 0; i < this.storage.length;i++){
      const key = this.storage.key(i);
      
      const value = this.storage.getItem(key!);
        
      historyList.push(JSON.parse(value!));

    }

    return historyList;
  }
  
}