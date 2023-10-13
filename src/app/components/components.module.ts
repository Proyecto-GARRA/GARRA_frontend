import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { OptionsMenuComponent } from './options-menu/options-menu.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { EmployeesDetailComponent } from './employees/employees-detail/employees-detail.component';
import { EmployeesFormComponent } from './employees/employees-form/employees-form.component';
import { ClientTableComponent } from './clients/client-table/client-table.component';

const components = [
  ClientDetailComponent,
  ClientTableComponent,
  EmployeesDetailComponent,
  EmployeesFormComponent,
  OptionsMenuComponent,
]

@NgModule({
  declarations: [ components ],
  exports: [ components ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TableModule,
    DialogModule,
    SplitButtonModule,
    PasswordModule,
    CalendarModule,

  ]
})
export class ComponentsModule { }
