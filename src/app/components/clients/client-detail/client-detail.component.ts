import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientsService } from 'src/app/services/clients.service';
import { ClientDetailService } from './client-detail.service';

@Component({
    selector: 'client-detail',
    templateUrl: './client-detail.component.html',
    styleUrls: ['./client-detail.component.scss'],
})
export class ClientDetailComponent {
    public modelDetail: boolean = false;
    public clientes: Cliente[] = [];
    @Input() cliente!: Cliente;



    constructor(private clientsService: ClientsService,
                public clientDetailService: ClientDetailService ) {}


    cerrarModal(){
      this.clientDetailService.cerrarModalCliente();
    }
}
