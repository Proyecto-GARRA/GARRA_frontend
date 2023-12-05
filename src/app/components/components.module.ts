import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';

import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { TableComponent } from './table/table.component';
import { EmployeesTableComponent } from './employees/employees-table/employees-table.component';
import { QuotesTableComponent } from './quotes/quotes-table/quotes-table.component';

const components = [
    ClientDetailComponent,
    EmployeesTableComponent,
    QuotesTableComponent,
    TableComponent,
];

@NgModule({
    declarations: [components],
    exports: [components],
    imports: [
        AutoCompleteModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CommonModule,
        ContextMenuModule,
        DialogModule,
        FieldsetModule,
        InputTextModule,
        PasswordModule,
        SplitButtonModule,
        TableModule,
    ],
})
export class ComponentsModule {}
