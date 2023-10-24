import { Component } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
    selector: 'client-detail',
    templateUrl: './client-detail.component.html',
    styleUrls: ['./client-detail.component.scss'],
})
export class ClientDetailComponent {
    public modelDetail: boolean = false;
    public clientes: Cliente[] = [];
    public selectedCliente: Cliente | null = null;

    constructor(private clientsService: ClientsService) {}

    ngOnInit() {
        this.clientsService.getClientes().subscribe(clientes => {
            this.clientes = clientes;
        });
    }

    openDetail() {
        // this.selectedCliente = cliente;
        this.modelDetail = !this.modelDetail;
    }

    closeMenu() {
        this.selectedCliente = null;
        this.modelDetail = false;
    }
}
