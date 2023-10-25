import { ClientDetailService } from './../client-detail/client-detail.service';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';
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

    clientes: Cliente[] = [];
    cliente!: Cliente;
    opciones: MenuItem[] = [];
    clienteSeleccionado!: Cliente;


    constructor(private clientsService: ClientsService,
                public clientDetailService: ClientDetailService) {}

    ngOnInit() {
        this.opciones = [
            {
                label: 'Detalles',
                icon: 'pi pi-user',
                command: () => {
                  
                }
            },
            {
                label: 'Editar',
                icon: 'pi pi-user-edit',
                command: () => console.log('Editar'),
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-user-minus',
                command: () => console.log('Eliminar'),
            },
        ];

        this.clientsService.getClientes().subscribe(clientes => {
            this.clientes = clientes;
        });
    }

    showContext(cm: ContextMenu, cliente: Cliente, event: MouseEvent) {
        cm.show(event);
        this.cliente = cliente;
        event.stopPropagation();
    }

    abrirModal(cliente: Cliente){
      this.clienteSeleccionado = cliente;
      this.clientDetailService.abrirModalCliente;
    }
}
