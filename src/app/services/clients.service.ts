import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) {}

    //OBTENER TODOS LOS CLIENTES
    getClientes(): Observable<Cliente[]>{
      return this.http.get<Cliente[]>(this.urlEndPoint);
    }
}
