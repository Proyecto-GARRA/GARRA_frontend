import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes.component';
import { QuotesDetailComponent } from 'src/app/components/quotes/quotes-detail/quotes-detail.component';
import { QuotesTableComponent } from 'src/app/components/quotes/quotes-table/quotes-table.component';

const components = [
  QuotesComponent,
  QuotesDetailComponent,
  QuotesTableComponent
]
@NgModule({



    declarations: [components],
    exports: [components],
    imports: [
      CommonModule,
      QuotesRoutingModule,
      TableModule
    ],
})
export class QuotesModule {}
