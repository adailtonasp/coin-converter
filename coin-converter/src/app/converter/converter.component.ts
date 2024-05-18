import { Component,inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConverterService} from '../converter.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {

  private converterService : ConverterService = inject(ConverterService);

  private money_value = 0; 

  constructor() {}

  coinConverter(baseCoin: string, targetCoin:string,money_string:string) { 
    console.log("coin converter from converter component");
    const money_number = parseFloat(money_string);
    if(isNaN(money_number)){
      console.log("Erro ao converter para float!");
    }

    const convertionRate = this.converterService.coinConverter(baseCoin,targetCoin)?.conversion_rate;
    
    if(convertionRate){
      this.money_value = money_number * convertionRate;
    } 
  }

}
