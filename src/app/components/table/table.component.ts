import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';
import { Table } from 'primeng/table';
import { Column } from 'src/app/interfaces/col';
import { Cliente } from 'src/app/interfaces/cliente';
import { Empleado } from 'src/app/interfaces/empleado';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Cita } from 'src/app/interfaces/cita';
import { DetailComponent } from '../detail/detail.component';
import { ClientsService } from '../../services/clients.service';
import { EmployeesService } from '../../services/employees.service';
import { QuotesService } from '../../services/quotes.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    @Input() cols!: Column[];
    @Input() filterCols!: string[];
    @Input() data!: Cliente[] | Empleado[] | Cita[];
    @Input() details!: Function;
    @Input() edit!: Function;
    @Input() delete!: Function;
    @ViewChild('dt') dt: Table | undefined;
    clientDelete!: Cliente[];
    employeeDelet!: Empleado[];
    quoteDelet!: Cita[];
    opciones: MenuItem[] = [];
    formularios: MenuItem[] = [];
    rowData: any = '';
    display: boolean = false;
    @Input() buttonConfig: any;
    clienteEliminado!: [];

    constructor(private router: Router,
                private clientsService: ClientsService,
                private employeesService: EmployeesService,
                private quotesService: QuotesService,
                private route: ActivatedRoute){}

    ngOnInit() {
    const url = this.router.url;
    let formularioSeleccionado: string;
    if (url === '/lista-clientes') {
      formularioSeleccionado = '/formulario-cliente';

    } else if (url === '/lista-empleados') {
      formularioSeleccionado = '/formulario-empleado';

    } else {
      formularioSeleccionado = '/formulario-cita';

    }

        this.opciones = [
            {
                label: 'Detalles',
                icon: 'pi pi-user',
                command: () => {
                  this.details == null
                        ? console.log(this.rowData)
                        : this.details(this.rowData);
                  this.mostrarDetalles();
                },
            },
            {
                label: 'Editar',
                icon: 'pi pi-user-edit',
                command: () => {
                    const id = this.rowData.id;
                    const url1 = this.router.url;
                    console.log(formularioSeleccionado);
                    this.router.navigate([`${url1}${formularioSeleccionado}/${id}`]);
                },
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-user-minus',
                command: () => {
                  this.eliminar();
                },
            },
        ];

        this.filterCols == null ? (this.filterCols = ['name']) : null;
    }

    showContext(cm: ContextMenu, rowData: any, event: MouseEvent) {
        cm.show(event);
        this.rowData = rowData;
        event.stopPropagation();
    }

    applyFilterGlobal($event: any, stringVal: any) {
        this.dt!.filterGlobal(
            ($event.target as HTMLInputElement).value,
            stringVal
        );
    }

    mostrarDetalles() {
      this.details == null
                        ? console.log(this.rowData)
                        : this.details(this.rowData);
      this.display = true;
    }

    cargarPagina(){
      location.reload();
    }

    eliminar(): void {
      if (this.rowData && this.rowData.id) {
        const idToDelete = this.rowData.id;
        const url = this.router.url;
        if (url === '/lista-clientes') {
          this.deleteCliente(idToDelete);
        } else if (url === '/lista-empleados') {
          this.deleteEmpleado(idToDelete);
        } else {
          this.deleteCita(idToDelete);
        }
      }
    }
    deleteCliente(id: number): void {
      const confirmation = confirm('¿Estás seguro de que deseas eliminar este cliente?');
      if (confirmation) {
        this.clientsService.delete(id).subscribe({
          next: (resp) => {
            this.clientDelete = this.clientDelete.filter(cli => cli.id !== id);
            Swal.fire({
              title: 'Cliente eliminado!',
              text: 'El cliente ha sido eliminado exitosamente',
              icon: 'success',
            })
          },
          error: (err) => {
            console.error("Error al eliminar cliente:", err);
            Swal.fire(
              'Error!',
              'Ocurrió un error al eliminar el cliente. Por favor, cheque si tiene una cita pendiente.',
              'error'
            );
          }
        });
      }
    }
    deleteEmpleado(id: number): void {
      const confirmation = confirm('¿Estás seguro de que deseas eliminar este cliente?');
      if (confirmation) {
        this.employeesService.delete(id).subscribe({
          next: (resp) => {
            this.employeeDelet = this.employeeDelet.filter(empl => empl.id !== id);
            Swal.fire(
              'Empleado eliminado!',
              'El empleado ha sido eliminado exitosamente',
              'success'
            );
          },
          error: (err) => {
            console.error("Error al eliminar empleado:", err);
            Swal.fire(
              'Error!',
              'Ocurrió un error al eliminar el empleado. Por favor, cheque si tiene una cita pendiente.',
              'error'
            );
          }
        });
      }
    }
    deleteCita(id: number): void {
      const confirmation = confirm('¿Estás seguro de que deseas eliminar este cliente?');
      if (confirmation) {
        this.quotesService.delete(id).subscribe({
          next: (resp) => {
            this.quoteDelet = this.quoteDelet.filter(quot => quot.id !== id);
            Swal.fire(
              'Cita cancelada!',
              'El cita ha sido eliminado exitosamente',
              'success'
            );
          },
          error: (err) => {
            console.error("Error al eliminar cita:", err);
            Swal.fire(
              'Error!',
              'Ocurrió un error al eliminar la cita.',
              'error'
            );
          }
        });
      }
    }
}
