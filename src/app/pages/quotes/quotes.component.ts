import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Cita } from 'src/app/interfaces/cita';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent {
  public citas!: Cita[];
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  @ViewChild('dt') table: Table;


  constructor(private quotesService:QuotesService) {}

  ngOnInit() {
    this.items = [ { label: 'Lista de citas' }];
    this.home = { icon: 'pi pi-home', routerLink: 'lista-citas' };

    this.quotesService.getCitas().subscribe(
      citas =>{  this.citas = citas; });
    }

    filtrarPorNombre(event: any) {
      this.table.filter(event.target.value, 'cliente.correo', 'contains');
    }
}
