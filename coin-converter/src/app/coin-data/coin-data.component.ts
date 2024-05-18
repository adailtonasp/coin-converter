import { Component, Input } from '@angular/core';
import {Coin} from '../coin';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coin-data',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './coin-data.component.html',
  styleUrl: './coin-data.component.css'
})
export class CoinDataComponent {
  @Input() coinData! : Coin;
}
