import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
    public errores: string[] = [];
    clientes!: Cliente[];
    items: MenuItem[] | undefined;
    home: MenuItem | undefined;

    constructor(private clientsService: ClientsService) {}

    ngOnInit() {
      this.items = [ { label: 'Lista de clientes' }];
      this.home = { icon: 'pi pi-home', routerLink: '/' };

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
