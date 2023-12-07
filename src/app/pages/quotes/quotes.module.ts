import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { DividerModule } from 'primeng/divider';

const components = [
  QuotesComponent,
  QuotesFormComponent,
  QuotesDetailComponent
]
@NgModule({
    declarations: [components],
    exports: [components],
    imports: [
      CommonModule,
      QuotesRoutingModule,
      FormsModule,  //Importante
      ReactiveFormsModule,
      AutoCompleteModule,
      TableModule,
      CardModule,
      CalendarModule,
      DropdownModule,
      BreadcrumbModule,
        DividerModule
    ],
})
export class QuotesModule {}
