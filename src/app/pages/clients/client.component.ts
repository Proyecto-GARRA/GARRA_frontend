import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
    public errores: string[] = [];
    // clientes: Cliente[] = [];
    clientes!: Cliente[];

    constructor(private clientsService: ClientsService) {}

    ngOnInit() {

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
