import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ClientDetailComponent } from './client-detail/client-detail.component';

const components = [
    ClientComponent,
    ClientFormComponent,
    ClientDetailComponent,
];

@NgModule({
    declarations: [components],
    exports: [components],
    imports: [
        ButtonModule,
        CardModule,
        ClientRoutingModule,
        CommonModule,
        FormsModule,
        CalendarModule,
        TableModule,
        BreadcrumbModule,
        DialogModule,
        PanelModule,
        DividerModule,
    ],
})
export class ClientModule {}
