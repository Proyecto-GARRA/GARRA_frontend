import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
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
    visible: boolean = false;
    selectedClient: any;
    @ViewChild('dt') table: Table;

    constructor(private clientsService: ClientsService) {}

    ngOnInit() {
        this.items = [{ label: 'Lista de clientes' }];
        this.home = { icon: 'pi pi-home', routerLink: '/' };

        this.clientsService.getClientes().subscribe(clientes => {
            this.clientes = clientes;
        });
    }
    showDialog(cliente: any) {
        const clientId = cliente.id;
        this.clientsService.getId(clientId).subscribe(
          (response) => {
            this.selectedClient = response;

          },
          (error) => {
            console.error(error);
          }
        );
    }

    filtrarPorNombre(event: any) {
      this.table.filter(event.target.value, 'correo', 'contains');
    }

    customButtonConfig = {
        icon: 'pi pi-user-plus',
        label: 'Agregar',
        routerLink: 'formulario-cliente',
    };
}
