import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';

const components = [
  EmployeesComponent,
  EmployeesFormComponent,
  EmployeeDetailComponent
]

@NgModule({
    declarations: [components],
    exports:[components],
    imports:[
      CommonModule,
      // ComponentsModule,
      FormsModule,
      CalendarModule,
      CardModule,
      DropdownModule,
      EmployeesRoutingModule,
      AutoCompleteModule,
      TableModule,
      BreadcrumbModule,
      DialogModule,
      PanelModule,
      DividerModule
    ],
})
export class EmployeesModule {}
