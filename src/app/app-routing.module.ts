import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
            import('./pages/employees/employees.module').then(m => m.EmployeesModule),
    },
    {
        path: 'lista-citas',
        loadChildren: () =>
            import('./pages/quotes/quotes.module').then(m => m.QuotesModule),
    },
    {
        path: 'lista-historia',
        loadChildren: () =>
            import('./pages/history-quotes/history-quotes.module').then(m => m.HistoryQuotesModule),
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
