import { ReportsService } from './../../services/reports.service';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Cita } from 'src/app/interfaces/cita';
import { Reporte } from 'src/app/interfaces/reporte';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'history-quotes',
  templateUrl: './history-quotes.component.html',
  styleUrls: [ './history-quotes.component.scss' ]
})
export class HistoryQuotesComponent {
  citas!: Cita[];
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  constructor( private quotesService: QuotesService ){  }

  ngOnInit() {
    this.items = [ { label: 'Historial' }];
    this.home = { icon: 'pi pi-home', routerLink: 'lista-historia' };

    this.quotesService.getInactivas().subscribe(
      citas =>{  this.citas = citas; });
  }

  finzalizar(id){
    
  }
}
