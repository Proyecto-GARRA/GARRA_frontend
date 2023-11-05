import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeesComponent,
    },
    {
      path:'formulario-empleado',
      component: EmployeesFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeesRoutingModule {}
