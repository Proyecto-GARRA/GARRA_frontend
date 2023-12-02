import { Component } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
    public errores: string[] = [];
    cols: any;
    empleados!: Empleado[];

    constructor(private employeesService:EmployeesService){}

    ngOnInit() {
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
