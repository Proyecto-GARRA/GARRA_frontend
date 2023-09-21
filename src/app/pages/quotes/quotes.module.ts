import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes.component';


@NgModule({
  declarations: [QuotesComponent],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    TableModule,

  ]
})
export class QuotesModule { }
