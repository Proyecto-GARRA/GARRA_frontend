import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailService {

  public modal:boolean = false;

  constructor() { }

  abrirModalCliente(){
    this.modal = true;
  }

  //Metodo para cerrar el modal
  cerrarModalCliente(){
    this.modal = false;
  }
}
