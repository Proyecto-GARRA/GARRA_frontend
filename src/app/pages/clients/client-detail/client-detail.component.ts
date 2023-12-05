import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientsService } from '../../../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: [ './client-detail.component.scss' ],
})
export class ClientDetailComponent {
  clientes!: Cliente[];
  cliente!: Cliente;
  // @Output() updateClient!: Cliente[];
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  constructor(  private clientService: ClientsService,
                private activatedRoute: ActivatedRoute,
                private router: Router){}

  ngOnInit() {
    this.cargarCliente();
    this.items = [ { label: 'Lista de clientes'}, {label: 'Detalle de cliente' } ];
    this.home = { icon: 'pi pi-home', routerLink: 'lista-clientes' };
  }


  cargarCliente(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.clientService.getCliente(id).subscribe((cliente) => {
          this.cliente = cliente;
        });
      }
    });
  }

}
