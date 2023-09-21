// Importaciones de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importaciones de primeNG
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
// Importaciones de rutas
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    // TableModule,
    // PanelModule,
    // ButtonModule
  ]
})
export class ClientModule { }
