import { ReportsService } from './../../services/reports.service';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Reporte } from 'src/app/interfaces/reporte';

@Component({
  selector: 'history-quotes',
  templateUrl: './history-quotes.component.html',
  styleUrls: [ './history-quotes.component.scss' ]
})
export class HistoryQuotesComponent {
  reportes!: Reporte[];
  items: MenuItem[] | undefined;
    home: MenuItem | undefined;

  constructor( private reportsService: ReportsService ){  }

  ngOnInit() {
    this.items = [ { label: 'Historial' }];
    this.home = { icon: 'pi pi-home', routerLink: 'lista-historia' };
    this.reportsService.getReportes().subscribe(
      reportes => {  this.reportes = reportes;
    });
  }
}
