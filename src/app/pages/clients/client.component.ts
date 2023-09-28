import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit{

  clientes!: Cliente[];
  opciones: MenuItem[] = [];


  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.opciones = [
      {
        items: [
          {
            label: 'Detalles',
            icon: 'pi pi-user',
            routerLink: '/'
          },
          {
            label: 'Editar',
            icon: 'pi pi-user-edit',
            routerLink: '/'
          },
          {
            label: 'Eliminar',
            icon: 'pi pi-user-minus',
            routerLink: '/'
          }
      ]
    },
  ];

    this.clientsService.getClientes().subscribe(data => {
      this.clientes = data;
    });



  }
}
