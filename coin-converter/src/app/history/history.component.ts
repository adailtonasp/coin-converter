import { Component, inject} from '@angular/core';
import {HistoryElement} from '../history-element';
import {ConverterService} from '../converter.service';
import {HistoryDataComponent} from '../history-data/history-data.component'
import {CommonModule} from '@angular/common';;

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,HistoryDataComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  historyList : HistoryElement[] = [];

  converterService : ConverterService = inject(ConverterService);

  constructor() {
    this.historyList = this.converterService.getAllHistory();
  }
}
