import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Empleado } from '../interfaces/empleado';
import Swal from 'sweetalert2';
import { TipoEmpl } from '../interfaces/tipoEmpl';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class EmployeesService {
    private urlEndPoint: string = 'http://localhost:8080/api/empleados';
    private HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    //OBTENER TODOS LOS EMPLEADOS
    getEmpleados(): Observable<Empleado[]> {
        return this.http.get<Empleado[]>(this.urlEndPoint);
    }

    getEmpleadosTecnicos(): Observable<Empleado[]> {
        return this.http.get<Empleado[]>(
            this.urlEndPoint + '/filtrar-tecnicos'
        );
    }

    getTipoDeEmpleado(): Observable<TipoEmpl[]> {
        return this.http.get<TipoEmpl[]>(this.urlEndPoint + '/tipoEmpleados');
    }

    create(empleado: Empleado): Observable<any> {
        return this.http
            .post<any>(this.urlEndPoint, empleado, {
                headers: this.HttpHeaders,
            })
            .pipe(
                tap(() => {
                    Swal.fire(
                        'Success!',
                        'Empleado creado exitosamente.',
                        'success'
                    );
                }),
                catchError((error: any) => {
                    throw Swal.fire('Error!', `Error`, 'error');
                })
            );
    }

    getId(id: Empleado): Observable<Empleado> {
        return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
            catchError(e => {
                this.router.navigate(['/empleados']);
                return throwError(() => e);
            })
        );
    }

    getEmpleado(id: number): Observable<any> {
        return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
            catchError(e => {
                this.router.navigate(['/lista-empleados']);
                console.error(e.error.mensaje);
                Swal.fire(e.error.mensaje, e.error.error, 'error');
                return throwError(() => e);
            })
        );
    }

    update(empleado: Empleado): Observable<any> {
        return this.http
            .put<any>(`${this.urlEndPoint}/${empleado.id}`, empleado, {
                headers: this.HttpHeaders,
            })
            .pipe(
                tap(() => {
                    Swal.fire(
                        'Success!',
                        'Empleado se actualizo exitosamente.',
                        'success'
                    );
                }),
                catchError((error: any) => {
                    throw Swal.fire('Error!', `Error.`, 'error');
                })
            );
    }

    //DELETE PARA ELIMINAR
    delete(id: number): Observable<any> {
        return this.http
            .delete<any>(`${this.urlEndPoint}/${id}`, {
                headers: this.HttpHeaders,
            })
            .pipe(
                tap(() => {
                    Swal.fire(
                        'Success!',
                        'Empleado eliminado exitosamente.',
                        'success'
                    );
                }),
                catchError((error: any) => {
                    throw Swal.fire('Error!', `Error.`, 'error');
                })
            );
    }
}
