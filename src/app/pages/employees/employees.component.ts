import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
    public errores: string[] = [];
    empleados!: Empleado[];
    items: MenuItem[] | undefined;
    home: MenuItem | undefined;

    constructor(private employeesService: EmployeesService) {}

    ngOnInit() {
        this.items = [{ label: 'Lista de empleados' }];
        this.home = { icon: 'pi pi-home', routerLink: 'lista-empleados' };

        this.employeesService.getEmpleados().subscribe(empleados => {
            this.empleados = empleados;
        });
    }

    customButtonConfig = {
        icon: 'pi pi-user-plus',
        label: 'Agregar',
        routerLink: 'formulario-empleado',
    };
}
