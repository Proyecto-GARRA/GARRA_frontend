import { Component } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmployeesService } from '../../../services/employees.service';
import { TipoEmpl } from '../../../interfaces/tipoEmpl';

@Component({
  selector: 'employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent {
    public errores: string[] = [];
    cols: any;

    public empleados!: Empleado[];

    constructor(private employeesService:EmployeesService){}

    ngOnInit() {
      this.cols = [
          { field: 'id', header: 'ID' },
          { field: 'nombreDelEmpleado', header: 'Nombre' },
          { field: 'apellido_P', header: 'Apellido 1' },
          { field: 'apellido_M', header: 'Apellido 2' }
        ];

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
