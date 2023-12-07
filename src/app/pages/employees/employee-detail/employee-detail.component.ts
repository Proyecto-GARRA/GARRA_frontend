import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: [ './employee-detail.component.scss' ],
})
export class EmployeeDetailComponent {
  empleados!: Empleado[];
  empleado: Empleado;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  constructor(  private employeesService: EmployeesService,
                private activatedRoute: ActivatedRoute,
                private router: Router){}

  ngOnInit(){
    this.items = [ { label: 'Lista de empelados'}, {label: 'Detalle de empleado' } ];
    this.home = { icon: 'pi pi-home', routerLink: 'lista-empleados' };

    this.activatedRoute.paramMap.subscribe(params => {
      let id: number = +params.get('id');
      if (id) {
        this.employeesService.getEmpleado(id).subscribe(empleado => {
          this.empleado = empleado;
        });
      }
    });

  }

  // cargarEmpleado(): void {
  //   this.activatedRoute.params.subscribe((params) => {
  //     const id = +params['id'];
  //     if (id) {
  //       this.employeesService.getEmpleado(id).subscribe((empleado) => {
  //         this.empleado = empleado;
  //       });
  //     }
  //   });
  // }

  eliminar(eliminarEmpleado: Empleado): void{
    Swal.fire({
      title: "Eliminar",
      text: `¿Esta seguro de eliminar el empleado ${this.empleado.nombreDelEmpleado}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si eliminar!"
    }).then((result) => {
        if (result.value) {
          this.employeesService.delete(eliminarEmpleado.id).subscribe(
            response => {
              this.empleados = this.empleados.filter(empleado => empleado !== empleado);
              Swal.fire(
                'Empleado eliminado!',
                `El empleado ${this.empleado.nombreDelEmpleado} ah sido eliminado`,
                'success'
              );
            });
          }
        });
      }

      atras(){
        history.back();
      }
}
