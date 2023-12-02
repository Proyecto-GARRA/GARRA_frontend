import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './quotes.component';
import { QuotesDetailComponent } from 'src/app/components/quotes/quotes-detail/quotes-detail.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

const components = [
  QuotesComponent,
  QuotesDetailComponent,
  QuotesFormComponent
]
@NgModule({
    declarations: [components],
    exports: [components],
    imports: [
      CommonModule,
      QuotesRoutingModule,
      // ComponentsModule,
      FormsModule,  //Importante
      ReactiveFormsModule,
      AutoCompleteModule,
      TableModule,
      CardModule,
      CalendarModule,
      DropdownModule
    ],
})
export class QuotesModule {}
