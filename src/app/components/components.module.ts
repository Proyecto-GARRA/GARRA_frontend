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

import { OptionsMenuComponent } from './options-menu/options-menu.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientTableComponent } from './clients/client-table/client-table.component';
import { TableComponent } from './table/table.component';

const components = [
    ClientDetailComponent,
    ClientTableComponent,
    //EmployeesDetailComponent,
    //EmployeesFormComponent,
    OptionsMenuComponent,
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
