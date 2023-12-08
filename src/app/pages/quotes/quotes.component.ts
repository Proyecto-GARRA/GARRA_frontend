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
  listaDeCitasFinalizadas: Cita[] = [];
    items: MenuItem[] | undefined;
    home: MenuItem | undefined;
  @ViewChild('dt') table: Table;

    constructor(private quotesService: QuotesService) {}

    ngOnInit() {
        this.items = [{ label: 'Lista de citas' }];
        this.home = { icon: 'pi pi-home', routerLink: 'lista-citas' };

        this.quotesService.getCitas().subscribe(citas => {
            this.citas = citas;
        });
    }

    finalizar(id: number) {
      // Llama al servicio para cambiar el estado
      this.quotesService.changeState(id, 'FINALIZADA').subscribe(
        () => {
          // Éxito al cambiar el estado
          // Ahora, mueve la cita a la lista de finalizadas
          const cita = this.citas.find(c => c.id === id);
          if (cita) {
            this.citas = this.citas.filter(c => c.id !== id);
            cita.estado = 'FINALIZADA';
            this.listaDeCitasFinalizadas.push(cita);
            console.log(this.listaDeCitasFinalizadas);

          }
        },
        (error) => {
          // Manejar el error si es necesario
          console.error('Error al finalizar la cita', error);
        }
    );
  }

    filtrarPorNombre(event: any) {
      this.table.filter(event.target.value, 'cliente.correo', 'contains');
    }
}
