import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';
import { Table } from 'primeng/table';
import { Column } from 'src/app/interfaces/col';
import { Cliente } from 'src/app/interfaces/cliente';
import { Empleado } from 'src/app/interfaces/empleado';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Cita } from 'src/app/interfaces/cita';
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

    constructor(private router: Router,
                private clientsService: ClientsService,
                private employeesService: EmployeesService,
                private quotesService: QuotesService,
                private route: ActivatedRoute){}

    ngOnInit() {
    this.clientsService.getClientes();

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
                  const id = this.rowData.id;
                  console.log(id)
                  this.mostrarDetalles();
                  this.detail();
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
      this.display = true;
      const mostrar = true;
    }

    cargarPagina(){
      location.reload();
    }

    detail(): void {
      if (this.rowData && this.rowData.id) {
        const id = this.rowData.id;
        const url = this.router.url;
        if (url === '/lista-clientes') {
          // this.detailClient(id);
        } else if (url === '/lista-empleados') {
          // this.dtailEmpleyee(id);
        } else {
          // this.detailQuote(id);
        }
      }
    }

    eliminar(): void {
      if (this.rowData && this.rowData.id) {
        const id = this.rowData.id;
        const url = this.router.url;
        if (url === '/lista-clientes') {
          this.deleteCliente(id);
        } else if (url === '/lista-empleados') {
          this.deleteEmpleado(id);
        } else {
          this.deleteCita(id);
        }
      }
    }
    deleteCliente(id: number): void {
            Swal.fire({
              title: "Advertencia!!",
              text: "Esta seguro que desea eliminar el cliente de la lista?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Si, eliminar!"
                }).then((result) => {
                if (result.isConfirmed) {
                  this.clientsService.delete(id).subscribe({
                    next: (resp) => {
                      this.clientDelete = this.clientDelete.filter(cli => cli.id !== id);
                  Swal.fire({
                  title: "Eliminado!",
                  text: "El cliente a sido eliminado!.",
                  icon: "success"
                });
              }
            });
          }
          location.reload()
        });
      }
    deleteEmpleado(id: number): void {
      Swal.fire({
        title: "Advertencia!!",
        text: "Esta seguro que desea eliminar el empleado de la lista?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
          }).then((result) => {
          if (result.isConfirmed) {
            this.employeesService.delete(id).subscribe({
              next: (resp) => {
                this.employeeDelet = this.employeeDelet.filter(emplo => emplo.id !== id);
            Swal.fire({
            title: "Eliminado!",
            text: "El empleado a sido eliminado!.",
            icon: "success"
          });
        }
      });
    }
    location.reload();
  });
}
    deleteCita(id: number): void {
      Swal.fire({
        title: "Advertencia!!",
        text: "Esta seguro que desea eliminar la cita?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
          }).then((result) => {
          if (result.isConfirmed) {
            this.quotesService.delete(id).subscribe({
              next: (resp) => {
                this.quoteDelet = this.quoteDelet.filter(quot => quot.id !== id);
            Swal.fire({
            title: "Eliminado!",
            text: "El cliente a sido eliminado!.",
            icon: "success"
          });
        }
      });
    }
    location.reload();
  });
}
}
