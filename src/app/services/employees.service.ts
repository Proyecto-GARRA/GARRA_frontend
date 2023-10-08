import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private urlEndPoint: string = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient) { }

  //OBTENER TODOS LOS EMPLEADOS
  getEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.urlEndPoint);
  }

}
