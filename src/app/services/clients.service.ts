import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class ClientsService {
    private urlEndPoint: string = 'http://localhost:8080/api/clientes';
    private HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });

    constructor(private http: HttpClient,
                private router: Router) {}

    //OBTENER TODOS LOS CLIENTES
    getClientes(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.urlEndPoint);
    }

    create(cliente: Cliente): Observable<any> {
        return this.http
            .post<any>(this.urlEndPoint, cliente, { headers: this.HttpHeaders })
            .pipe(
                tap(() => {
                    Swal.fire(
                        'Success!',
                        'Cliente creado exitosamente.',
                        'success'
                    );
                }),
                catchError((error: any) => {
                    throw Swal.fire('Error!', `Correo ya existente.`, 'error');
                })
            );
    }

    getId(id:Cliente): Observable<Cliente>{
      return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
        catchError(e => {
          this.router.navigate(['/clientes']);
          return throwError(()=>e)
        })
      );
    }

    update(cliente: Cliente): Observable<any>{
      return this.http
        .put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers:this.HttpHeaders})
        .pipe(
          tap(() => {
            Swal.fire(
                'Success!',
                'Cliente se actualizo exitosamente.',
                'success'
            );
        }),
        catchError((error: any) => {
            throw Swal.fire('Error!', `Error.`, 'error');
        })
    );
}

    //DELETE PARA ELIMINAR
    delete(id: number): Observable<any>{
      return this.http
        .delete<any>(`${this.urlEndPoint}/${id}`, {headers: this.HttpHeaders})
        .pipe(
          tap(() => {
            Swal.fire(
                'Success!',
                'Cliente eliminado exitosamente.',
                'success'
            );
        }),
        catchError((error: any) => {
            throw Swal.fire('Error!', `Error.`, 'error');
        })
    );
}
}
