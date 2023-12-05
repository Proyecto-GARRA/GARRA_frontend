import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ClientComponent,
    },
    {
        path: 'formulario-cliente',
        component: ClientFormComponent,
    },
    {
        path: 'formulario-cliente/:id',
        component: ClientFormComponent,
    },
    {
      path: 'detail-cliente/:id',
      component: ClientDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientRoutingModule {}
