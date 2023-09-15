import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('')
  //   .then( m => m.ClienteModule )
  // },
  // {
  //   path: 'lista-clientes',
  //   loadChildren: () => import('')
  //   .then( m => m.ClienteModule )
  // },
  // {
  //   path: 'lista-empleados',
  //   loadChildren: () => import('')
  //   .then( m => m.EmpleadoModule )
  // },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
