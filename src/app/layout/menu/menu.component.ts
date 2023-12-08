import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Cliente',
                routerLink: 'lista-clientes',
                icon: 'pi pi-user',
            },
            {
                label: 'Empleado',
                routerLink: 'lista-empleados',
                icon: 'pi pi-briefcase',
            },
            {
                label: 'Citas',
                routerLink: 'lista-citas',
                icon: 'pi pi-calendar',
                items: [
                    {
                        label: 'Historal',
                        routerLink: 'lista-historia',
                        icon: 'pi pi-folder',
                    },
                ],
            },
        ];
    }
}
