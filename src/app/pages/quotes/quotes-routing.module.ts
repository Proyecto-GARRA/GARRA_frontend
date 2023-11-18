import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';

const routes: Routes = [
    {
        path: '',
        component: QuotesComponent,
    },
    {
        path: 'formulario-citas',
        component: QuotesFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class QuotesRoutingModule {}
