import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { EmployeesModule } from './pages/employees/employees.module';

const routes: Routes = [
  {
    path: '', redirectTo: '/lista-clientes', pathMatch: 'full'
  },
  {
    path: 'lista-clientes',
    loadChildren: () => import('./pages/client/client.module')
    .then( m => m.ClientModule )
  },
  {
    path: 'lista-empleados',
    loadChildren: () => import('./pages/employees/employees.module')
    .then( m => m.EmployeesModule )
  },
  // {
  //   path:'lista-citas',
  //   loadChildren: () => import('')
  //   .then( m => m.CitaModule)
  // },
  // {
  //   path:'lista-reportes',
  //   loadChildren:() => import('')
  //   .then(  m => m.ReporteModule)
  // }
  {
    path: '**', redirectTo: '/lista-clientes'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
