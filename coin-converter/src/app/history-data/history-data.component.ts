import { Component, Input } from '@angular/core';
import {HistoryElement} from '../history-element';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-history-data',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './history-data.component.html',
  styleUrl: './history-data.component.css'
})
export class HistoryDataComponent {
  @Input() historyData! : HistoryElement;
}
