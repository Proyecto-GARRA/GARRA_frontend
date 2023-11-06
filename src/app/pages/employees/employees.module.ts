import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { DropdownModule } from 'primeng/dropdown';

const components = [
  EmployeesComponent,
  EmployeesFormComponent
]

@NgModule({
    declarations: [components],
    exports:[components],
    imports:[
      CommonModule,
      ComponentsModule,
      FormsModule,
      CalendarModule,
      CardModule,
      DropdownModule,
      EmployeesRoutingModule
    ],
})
export class EmployeesModule {}
