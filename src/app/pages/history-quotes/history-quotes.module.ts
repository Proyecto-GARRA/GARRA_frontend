import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryQuotesRoutingModule } from './history-quotes-routing.module';
import { HistoryQuotesComponent } from './history-quotes.component';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

const components = [
  HistoryQuotesComponent
]

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule,
    HistoryQuotesRoutingModule,
    TableModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    TagModule
  ]
})
export class HistoryQuotesModule { }
