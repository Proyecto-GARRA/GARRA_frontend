import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryQuotesComponent } from './history-quotes.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryQuotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryQuotesRoutingModule { }
