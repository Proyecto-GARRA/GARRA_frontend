import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
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
    @ViewChild('dt') table: Table;

    constructor(private employeesService:EmployeesService){}

    ngOnInit() {
      this.items = [ { label: 'Lista de empleados' } ];
      this.home = { icon: 'pi pi-home', routerLink: 'lista-empleados' };

      this.employeesService.getEmpleados().subscribe(empleados => {
          this.empleados = empleados;
      });
  }

  filtrarPorNombre(event: any) {
    this.table.filter(event.target.value, 'correo', 'contains');
  }

      customButtonConfig = {
        icon: 'pi pi-user-plus',
        label: 'Agregar',
        routerLink: 'formulario-empleado',
      };

}
