import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'split-menu',
  templateUrl: './split-menu.component.html',
  styleUrls: ['./split-menu.component.scss']
})
export class SplitMenuComponent {

  splitMenuCrear: MenuItem[] = [];
  splitMenuModificar: MenuItem[] = [];
  splitMenuEliminar: MenuItem[] = [];

  ngOnInit() {
      this.splitMenuCrear = [
          {
              label: 'Agregar cliente',
              icon: 'pi pi-user-plus'
          },
          {
              label: 'Agregar empleado',
              icon: 'pi pi-user-plus'
          },
          {
              label: 'Agendar cita',
              icon: 'pi pi-calendar-minus',
          }
      ];

      this.splitMenuModificar = [
        {
            label: 'Modificar cliente',
            icon: 'pi pi-user-edit'
        },
        {
            label: 'Modificar empleado',
            icon: 'pi pi-user-edit'
        },
        {
            label: 'Editar cita',
            icon: 'pi pi-user-edit',
        }
    ];

    this.splitMenuEliminar= [
      {
          label: 'Eliminar cliente',
          icon: 'pi pi-user-edit'
      },
      {
          label: 'Eliminar empleado',
          icon: 'pi pi-user-edit'
      },
      {
          label: 'Eliminar cita',
          icon: 'pi pi-calendar-times',
      }
  ];
  }


}
