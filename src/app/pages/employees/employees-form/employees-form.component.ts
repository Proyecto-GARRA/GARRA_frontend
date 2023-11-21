import { Component } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/interfaces/empleado';
import Swal from 'sweetalert2';
import { TipoEmpl } from 'src/app/interfaces/tipoEmpl';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'app-employees-form',
    templateUrl: './employees-form.component.html',
    styleUrls: ['./employees-form.component.scss'],
})
export class EmployeesFormComponent {
  public empleado: Empleado = new Empleado();
  public tipoEmpleado: TipoEmpl[] = [];
  public tipoEmpleados: SelectItem[] = [];


  public errores: string[] = [];
  public formError = false;
  date: Date[] | undefined;

  constructor(
    private employeesService:EmployeesService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ){}

    ngOnInit() {

      this.cargarEmpleados();

      this.employeesService.getTipoDeEmpleado().subscribe(tipoEmpleados => {
        this.tipoEmpleados = tipoEmpleados.map(tipoDeEmpleado => {
          return {
            label: `${tipoDeEmpleado.id} - ${tipoDeEmpleado.tipoEmpleado}`,
            value: tipoDeEmpleado
          };
        });
      });
    }

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
    console.log(this.empleado);

    this.employeesService.create(this.empleado).subscribe(
      jsonResponse =>{
        this.router.navigate(['/lista-empleados']);
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

  cargarEmpleados(): void {
    this.activatedRoute.params.subscribe(
      params =>{
        let id = params ['id']
        if(id){
          this.employeesService.getId(id)
              .subscribe((empleado) =>{
                this.empleado = empleado
              });
        }
      }
    )
  }

  getTipoDeEmpleado(o1:TipoEmpl, o2:TipoEmpl):boolean {
    return o1 &&  o2 ? o1.id === o2.id : o1 === o2;
  }

}


