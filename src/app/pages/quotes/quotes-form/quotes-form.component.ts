import { Component } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita';
import { QuotesService } from '../../../services/quotes.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmployeesService } from 'src/app/services/employees.service';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientsService } from '../../../services/clients.service';
import { TipoActividad } from 'src/app/interfaces/tipoActividad';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'quotes-form',
    templateUrl: './quotes-form.component.html',
    styleUrls: ['./quotes-form.component.scss'],
})
export class QuotesFormComponent {
    public cita: Cita = new Cita();
    public errores!: string[];
    public formError = false;
    date!: Date[];
    public empleadosTec!: Empleado[];
    public filteredEmpleadosTec!: any[];
    public clientesSelect!: Cliente[];
    public filteredClientSelect!: any[];
    public tipoActividad!: TipoActividad[];
    public TipoActividadSelect!: any[];
    items: MenuItem[] | undefined;
    home: MenuItem | undefined;

    constructor(
        private quotesService: QuotesService,
        private employeesService: EmployeesService,
        private clientsService: ClientsService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.items = [
            { label: 'Lista de citas' },
            { label: 'Formulario de cita' },
        ];
        this.home = { icon: 'pi pi-home', routerLink: 'formulario-cita' };
        this.cargarCita();
        this.employeesService
            .getEmpleadosTecnicos()
            .subscribe(empleadosTec => (this.empleadosTec = empleadosTec));
        this.clientsService
            .getClientes()
            .subscribe(
                clientesSelect => (this.clientesSelect = clientesSelect)
            );
        this.quotesService
            .getTipoActividad()
            .subscribe(
                tipoActividad => (this.TipoActividadSelect = tipoActividad)
            );
    }

    filtrarEmpleados(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;
        for (let i = 0; i < (this.empleadosTec as any[]).length; i++) {
            let emple = (this.empleadosTec as any[])[i];
            if (
                emple &&
                emple.nombreDelEmpleado &&
                emple.nombreDelEmpleado
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) == 0
            ) {
                filtered.push(emple);
            }
        }
        this.filteredEmpleadosTec = filtered;
    }

    filtrarClientes(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;
        for (let i = 0; i < (this.clientesSelect as any[]).length; i++) {
            let clie = (this.clientesSelect as any[])[i];
            if (
                clie &&
                clie.nombreDelCliente &&
                clie.nombreDelCliente
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) == 0
            ) {
                filtered.push(clie);
            }
        }
        this.filteredClientSelect = filtered;
    }

    filtrarTipoAct(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;
        for (let i = 0; i < (this.TipoActividadSelect as any[]).length; i++) {
            let tipoAct = (this.TipoActividadSelect as any[])[i];
            if (
                tipoAct &&
                tipoAct.tipoActividad &&
                tipoAct.tipoActividad
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) == 0
            ) {
                filtered.push(tipoAct);
            }
        }
        this.TipoActividadSelect = filtered;
    }

    create(): void {
        this.formError = false;
        if (
            !this.cita.fecha_cita ||
            !this.cita.hora_cita ||
            !this.cita.direccion ||
            !this.cita.descripcion ||
            !this.cita.empleado ||
            !this.cita.cliente ||
            !this.cita.tipoDeActividad
        ) {
            this.formError = true;
            return;
        }

        this.quotesService.create(this.cita).subscribe({
            next: jsonResponse => {
                this.router.navigate(['/lista-citas']);
                Swal.fire(
                    'Cita agregada',
                    `La cita del cliente ha sido agregado con exito`,
                    'success'
                );
            },
            error: err => {
                this.errores = err.error.errors as string[];
                console.error('Error en el codigo backend ' + err.status);
                console.error(err.error.errors);
            },
        });
    }

    update(): void {
        this.quotesService.update(this.cita).subscribe(
            jsonResponse => {
                this.router.navigate(['lista-citas']);
                Swal.fire(
                    'Cita Guardado',
                    `La cita ${jsonResponse.cliente.nombreDelCliente} ah sido guardado con exito`,
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

    cargarCita(): void {
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if (id) {
                this.quotesService.getCita(id).subscribe(cita => {
                    this.cita = cita;
                });
            }
        });
    }

    atras() {
        history.back();
    }
}
