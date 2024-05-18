import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListingComponent} from './listing/listing.component';
import {ConverterComponent} from './converter/converter.component';
import {HistoryComponent} from './history/history.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'listar',
        component: ListingComponent,
        title: 'Listagem Moedas'
    },
    {
        path: 'converter',
        component: ConverterComponent,
        title: 'Converter Moedas'
    },
    {
        path: 'historico',
        component: HistoryComponent,
        title: 'Historico de Moedas'
    },
    
];
