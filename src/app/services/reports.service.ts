import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Reporte } from '../interfaces/reporte';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})
export class ReportsService {
    private urlEndPoint: string = 'http://localhost:8080/api/citas';
    private HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(private http: HttpClient) {}

    getReportes(): Observable<Reporte[]> {
        return this.http.get<Reporte[]>(this.urlEndPoint);
    }

    create(reporte: Reporte): Observable<any> {
        return this.http
            .post<any>(this.urlEndPoint, reporte, { headers: this.HttpHeaders })
            .pipe(
                tap(() => {
                    Swal.fire(
                        'Success!',
                        'Cita creado exitosamente.',
                        'success'
                    );
                }),
                catchError((error: any) => {
                    throw Swal.fire('Error!', `Error`, 'error');
                })
            );
    }

    update(reporte: Reporte): Observable<any> {
        return this.http
            .put<any>(`${this.urlEndPoint}/${reporte.id}`, reporte, {
                headers: this.HttpHeaders,
            })
            .pipe(
                tap(() => {
                    Swal.fire(
                        'Success!',
                        'Cita se actualizo exitosamente.',
                        'success'
                    );
                }),
                catchError((error: any) => {
                    throw Swal.fire('Error!', `Error.`, 'error');
                })
            );
    }

    delete(id: number): Observable<any> {
        return this.http
            .delete<any>(`${this.urlEndPoint}/${id}`, {
                headers: this.HttpHeaders,
            })
            .pipe(
                tap(() => {
                    Swal.fire(
                        'Success!',
                        'Cita eliminada exitosamente.',
                        'success'
                    );
                }),
                catchError((error: any) => {
                    throw Swal.fire('Error!', `Error.`, 'error');
                })
            );
    }
}
