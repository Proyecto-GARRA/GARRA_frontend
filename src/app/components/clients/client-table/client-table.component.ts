import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
    selector: 'client-table',
    templateUrl: './client-table.component.html',
    styleUrls: ['./client-table.component.scss'],
})
export class ClientTableComponent {
    position: string = 'center';
    visible: boolean = false;

    public errores: string[] = [];
    cols: any;

    clientes: Cliente[] = [];
    cliente!: Cliente;
    opciones: MenuItem[] = [];

    constructor(private clientsService: ClientsService) {}

    ngOnInit() {
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'nombreDelCliente', header: 'Nombre' },
            { field: 'apellido_P', header: 'Apellido 1' },
            { field: 'apellido_M', header: 'Apellido 2' },
        ];

        this.clientsService.getClientes().subscribe(clientes => {
            this.clientes = clientes;
        });
    }

    customButtonConfig = {
      icon: 'pi pi-user-plus',
      label: 'Agregar',
      routerLink: 'formulario-cliente',
    };
}
