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
        {
            id: 2,
            nombreDelCliente: '',
            apellido_P: 'string',
            apellido_M: 'string',
            fecha_naci: 'string',
            domicilio: 'string',
            correo: 'string',
            telefono: 'string',
        },
    ];
    cliente!: Cliente;
    opciones: MenuItem[] = [];

    constructor(private clientsService: ClientsService) {}

    ngOnInit() {
        this.opciones = [
            {
                label: 'Detalles',
                icon: 'pi pi-user',
                command: () => console.log(this.cliente),
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
}
