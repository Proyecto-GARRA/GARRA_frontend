import { Component } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'quotes-table',
  templateUrl: './quotes-table.component.html',
  styleUrls: ['./quotes-table.component.scss']
})
export class QuotesTableComponent {
  public errores: string[] = []
  cols: any;
  public citas!: Cita[];

  constructor(private quotesService:QuotesService) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'fecha_cita', header: 'Fecha de la cita' },
      { field: 'hora_cita', header: 'Hora de la cita' },
    ];

    this.quotesService.getCitas().subscribe(
      citas =>{
        this.citas = citas;
      });
  }

  customButtonConfig = {
    icon: 'pi pi-user-plus',
    label: 'Agregar',
    routerLink: 'formulario-citas',
  };

}
