// Importaciones de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importaciones de primeNG
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
// Importaciones de componentes
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';

const components = [MenuComponent, FooterComponent, LayoutComponent];

@NgModule({
    imports: [
        CommonModule,
        MenubarModule,
        SidebarModule,
        ButtonModule,
        SpeedDialModule,
        ToastModule,
        ToolbarModule,
        SplitButtonModule,
    ],
    declarations: [components],
    exports: [components],
})
export class LayoutModule {}
