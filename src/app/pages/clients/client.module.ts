import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

const components = [
  ClientComponent
];

@NgModule({
  declarations: [ components ],
  exports: [ components ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ComponentsModule
  ]
})
export class ClientModule { }
