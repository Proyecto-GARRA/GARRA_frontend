import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientTableComponent } from './clients/client-table/client-table.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FieldsetModule } from 'primeng/fieldset';

const components = [
    ClientDetailComponent,
    ClientTableComponent,
    //EmployeesDetailComponent,
    //EmployeesFormComponent,,
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
        PasswordModule,
        SplitButtonModule,
        TableModule,
    ],
})
export class ComponentsModule {}
