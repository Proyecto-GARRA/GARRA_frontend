import { Component } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita';
import { QuotesService } from '../../../services/quotes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { FormControl, FormGroup } from '@angular/forms';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.scss']
})
export class QuotesFormComponent {
  public cita: Cita = new Cita();
  public errores!: string[];
  public formError = false;
  suggestions!: Empleado[];
  date!: Date[]
  public empleadosTec!: Empleado[];
  public filteredEmpleadosTec!: any[];


    constructor(
    private quotesService: QuotesService,
    private employeesService: EmployeesService,
    private router: Router
  ){ }

  ngOnInit() {
    this.employeesService.getEmpleadosTecnicos().subscribe(empleadosTec => this.empleadosTec = empleadosTec);
  }

  filtrarEmpleados(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.empleadosTec as any[]).length; i++) {
      let emple = (this.empleadosTec as any[])[i];
      if (emple && emple.nombreDelEmpleado && emple.nombreDelEmpleado.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(emple);
      }
  }
    this.filteredEmpleadosTec = filtered;
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
      next: (jsonResponse) => {
            this.router.navigate(['/cita']);
            Swal.fire(
                'Cita agregada',
                `El cita`,
                'success'
            );
        },
        error: err => {
            this.errores = err.error.errors as string[];
            console.error('Error en el codigo backend ' + err.status);
            console.error(err.error.errors);
        }
      }
    );
  }

}
