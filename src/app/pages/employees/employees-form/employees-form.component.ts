import { Component } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-employees-form',
    templateUrl: './employees-form.component.html',
    styleUrls: ['./employees-form.component.scss'],
})
export class EmployeesFormComponent {
  public empleado: Empleado = new Empleado();
  public errores: string[] = [];
  public formError = false;
  date: Date[] | undefined;

  constructor(
    private employeesService:EmployeesService,
    private router:Router
  ){}

  create():void{
    this.formError = false;

    if(
      !this.empleado.nombreDelEmpleado ||
      !this.empleado.apellido_P ||
      !this.empleado.apellido_M ||
      !this.empleado.correo ||
      !this.empleado.domicilio ||
      !this.empleado.fecha_naci ||
      !this.empleado.telefono ||
      !this.empleado.tipoDeEmpleado
    ){
      this.formError = true;
      return
    }

    this.employeesService.create(this.empleado).subscribe(
      jsonResponse =>{
        this.router.navigate(['/empleados']);
        Swal.fire(
          'Empleado agregado',
          `El empleado ${jsonResponse.empleado.nombreDelEmpleado} ${jsonResponse.empleado.apellido_P} ${jsonResponse.empleado.apellido_M}`,
          'success'
        );
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Error en el codigo backend ' + err.status);
        console.error(err.error.errors);
    }
    )

  }

}


