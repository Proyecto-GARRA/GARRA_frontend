// Importaciones de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importaciones de primeNG
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PanelMenuModule } from 'primeng/panelmenu';
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
    TableModule,
    CardModule,
    SplitButtonModule,
    ButtonModule,
    PanelMenuModule
  ]
})
export class ClientModule { }
