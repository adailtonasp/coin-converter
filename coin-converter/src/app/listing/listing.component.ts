import { Component,inject } from '@angular/core';
import {CoinDataComponent} from '../coin-data/coin-data.component';
import {Coin} from '../coin';
import {ConverterService} from '../converter.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule,CoinDataComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {

  coinDataList : Coin[] = [];

  converterService : ConverterService = inject(ConverterService);

  constructor() {
    this.converterService.coinListing().then((coinDataList : Coin[])=>{
      this.coinDataList = coinDataList;
    })
  }
}
