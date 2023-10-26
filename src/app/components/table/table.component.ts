import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';
import { Table } from 'primeng/table';
import { Column } from 'src/app/interfaces/col';
import { Cliente } from 'src/app/interfaces/cliente';
import { Empleado } from 'src/app/interfaces/empleado';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    @Input() cols!: Column[];
    @Input() filterCols!: string[];
    @Input() data!: Cliente[] | Empleado[];
    @Input() details!: Function;
    @Input() edit!: Function;
    @Input() delete!: Function;

    @ViewChild('dt') dt: Table | undefined;

    opciones: MenuItem[] = [];
    formularios: MenuItem[] = [];
    rowData: any = '';

    ngOnInit() {
        this.opciones = [
            {
                label: 'Detalles',
                icon: 'pi pi-user',
                command: () => {
                    this.details == null
                        ? console.log(this.rowData)
                        : this.details(this.rowData);
                },
            },
            {
                label: 'Editar',
                icon: 'pi pi-user-edit',
                command: () => {
                    this.edit == null
                        ? console.log('Editar')
                        : this.edit(this.rowData);
                },
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-user-minus',
                command: () => {
                    this.delete == null
                        ? console.log('Eliminar')
                        : this.delete(this.rowData);
                },
            },
        ];

        this.formularios = [
          {
              label: 'Agregar cliente',
              icon: 'pi pi-user-plus',
              routerLink: 'formulario-cliente'
          },
          {
              label: 'Agregar empleado',
              icon: 'pi pi-user-plus',
              command: () => {
                console.log('Se agrego el empleado con exito!')
              },
          },
          {
              label: 'Agregar cita',
              icon: 'pi pi-user-plus',
              command: () => {
                console.log('Se agrego la cita con exito!')
              },
          },
          {
            label: 'Agregar Reporte',
            icon: 'pi pi-user-plus',
            command: () => {
              console.log('Se agrego el reporte con exito!')
            },
        },
      ];

        this.filterCols == null ? (this.filterCols = ['name']) : null;
    }

    showContext(cm: ContextMenu, rowData: any, event: MouseEvent) {
        cm.show(event);
        this.rowData = rowData;
        event.stopPropagation();
    }

    showForms(fm: ContextMenu, rowData: any, event: MouseEvent) {
      fm.show(event);
      this.rowData = rowData;
      event.stopPropagation();
  }

    applyFilterGlobal($event: any, stringVal: any) {
        this.dt!.filterGlobal(
            ($event.target as HTMLInputElement).value,
            stringVal
        );
    }
}
