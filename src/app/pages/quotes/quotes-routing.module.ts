import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';

const routes: Routes = [
    {
        path: '',
        component: QuotesComponent,
    },
    {
        path: 'formulario-cita',
        component: QuotesFormComponent,
    },
    {
        path: 'formulario-cita/:id',
        component: QuotesFormComponent,
    },
    {
        path: 'detalle-cita/:id',
        component: QuotesDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class QuotesRoutingModule {}
