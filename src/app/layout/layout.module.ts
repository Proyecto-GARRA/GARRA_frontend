import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { LayoutComponent } from './layout.component';


import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

const components = [
    MenuComponent,
    FooterComponent,
    LayoutComponent
]

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    SpeedDialModule,
    ToastModule
  ],
  declarations: [components],
  exports:[components]
})
export class LayoutModule { }
