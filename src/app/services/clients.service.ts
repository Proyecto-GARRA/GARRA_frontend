import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  private HttpHeaders = new HttpHeaders ({'Content-Type': 'application/json'})


  constructor(private http: HttpClient) {}

    //OBTENER TODOS LOS CLIENTES
    getClientes(): Observable<Cliente[]>{
      return this.http.get<Cliente[]>(this.urlEndPoint);
    }

    create(cliente: Cliente): Observable<any>{
      return this.http.post<any>(this.urlEndPoint, cliente, {headers:this.HttpHeaders}).pipe(
        tap(() => {
          Swal.fire(
            'Success!',
            'Cliente creado exitosamente.',
            'success'
          );
        }),
        catchError((error: any) => {
          throw Swal.fire(
            'Error!',
            `Correo ya existente.`,
            'error'
          );
        })
      );
    }
}
