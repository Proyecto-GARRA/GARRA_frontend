import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeesComponent,
    },
    {
        path: 'lista-empleados',
        component: EmployeesComponent,
    },
    {
        path: 'formulario-empleado',
        component: EmployeesFormComponent,
    },
    {
        path: 'formulario-empleado/:id',
        component: EmployeesFormComponent,
    },
    {
        path: 'detalle-empleado/:id',
        component: EmployeeDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeesRoutingModule {}
