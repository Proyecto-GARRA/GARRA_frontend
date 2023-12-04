import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientsService } from 'src/app/services/clients.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'client-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent {
    public cliente: Cliente = new Cliente();
    public titulo: string = 'Crear cliente';
    public errores: string[] = [];
    public formError = false;
    date: Date[] | undefined;
    items: MenuItem[] | undefined;
    home: MenuItem | undefined;

    //Inyecciones
    constructor(
        private clienteService: ClientsService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
      this.cargarCliente();
      this.items = [ { label: 'Lista de clientes'}, {label: 'Formulario de clientes' }];
      this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

    create(): void {
        this.formError = false;

        if (
            !this.cliente.nombreDelCliente ||
            !this.cliente.apellido_P ||
            !this.cliente.apellido_M ||
            !this.cliente.fecha_naci ||
            !this.cliente.domicilio ||
            !this.cliente.correo ||
            !this.cliente.telefono
        ) {
            this.formError = true;
            return;
        }

        this.clienteService.create(this.cliente).subscribe(
            jsonResponse => {
                this.router.navigate(['/clientes']);
                Swal.fire(
                    'Cliente agregado',
                    `El cliente ${jsonResponse.cliente.nombreDelCliente} ${jsonResponse.cliente.apellido_P} ${jsonResponse.mensaje}`,
                    'success'
                );
            },
            err => {
                this.errores = err.error.errors as string[];
                console.error('Error en el codigo backend ' + err.status);
                console.error(err.error.errors);
            }
        );
    }

    cargarCliente(): void{
      this.activatedRoute.params.subscribe(
        paramas =>{
          let id = paramas ['id']
          if(id){
            this.clienteService.getId(id)
                .subscribe((cliente) =>{
                  this.cliente = cliente
                });
          }
        }
      )
    }
}
