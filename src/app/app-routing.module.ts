import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './pages/clients/client.component';
import { EmployeesModule } from './pages/employees/employees.module';
import { QuotesModule } from './pages/quotes/quotes.module';
import { ReportsModule } from './pages/reports/reports.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/lista-clientes',
        pathMatch: 'full',
    },
    {
        path: 'lista-clientes',
        loadChildren: () =>
            import('./pages/clients/client.module').then(m => m.ClientModule),
    },
    {
        path: 'lista-empleados',
        loadChildren: () =>
            import('./pages/employees/employees.module').then(
                m => m.EmployeesModule
            ),
    },
    {
        path: 'lista-citas',
        loadChildren: () =>
            import('./pages/quotes/quotes.module').then(m => m.QuotesModule),
    },
    {
        path: 'lista-reportes',
        loadChildren: () =>
            import('./pages/reports/reports.module').then(m => m.ReportsModule),
    },
    {
        path: '**',
        redirectTo: '/lista-clientes',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
