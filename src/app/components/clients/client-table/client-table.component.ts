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
    clientes: Cliente[] = [
        {
            id: 1,
            nombreDelCliente: '',
            apellido_P: 'string',
            apellido_M: 'string',
            fecha_naci: 'string',
            domicilio: 'string',
            correo: 'string',
            telefono: 'string',
        },
    ];
    opciones: MenuItem[] = [];

    constructor(private clientsService: ClientsService) {}

    ngOnInit() {
        this.opciones = [
            {
                label: 'Detalles',
                icon: 'pi pi-user',
                routerLink: '/',
            },
            {
                label: 'Editar',
                icon: 'pi pi-user-edit',
                routerLink: '/',
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-user-minus',
                routerLink: '/',
            },
        ];

        this.clientsService.getClientes().subscribe(clientes => {
            this.clientes = clientes;
        });
    }

    showContext(cm: ContextMenu, event: MouseEvent) {
        cm.show(event);
        event.stopPropagation();
    }
}
