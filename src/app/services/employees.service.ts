import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})
export class EmployeesService {
    private urlEndPoint: string = 'http://localhost:8080/api/empleados';
    private HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
  });

    constructor(private http: HttpClient) {}

    //OBTENER TODOS LOS EMPLEADOS
    getEmpleados(): Observable<Empleado[]> {
        return this.http.get<Empleado[]>(this.urlEndPoint);
    }

    create(empleado: Empleado): Observable<any> {
      return this.http
          .post<any>(this.urlEndPoint, empleado, { headers: this.HttpHeaders })
          .pipe(
              tap(() => {
                  Swal.fire(
                      'Success!',
                      'Empleado creado exitosamente.',
                      'success'
                  );
              }),
              catchError((error: any) => {
                  throw Swal.fire('Error!', `Correo ya existente.`, 'error');
              })
          );
  }
}
