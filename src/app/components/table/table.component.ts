import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';
import { Table } from 'primeng/table';
import { Column } from 'src/app/interfaces/col';
import { Cliente } from 'src/app/interfaces/cliente';
import { Empleado } from 'src/app/interfaces/empleado';
import { Router, RouterLink } from '@angular/router';
import { Cita } from 'src/app/interfaces/cita';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    @Input() cols!: Column[];
    @Input() filterCols!: string[];
    @Input() data!: Cliente[] | Empleado[] | Cita[];
    @Input() details!: Function;
    @Input() edit!: Function;
    @Input() delete!: Function;

    @ViewChild('dt') dt: Table | undefined;

    opciones: MenuItem[] = [];
    formularios: MenuItem[] = [];
    rowData: any = '';

    @Input() buttonConfig: any;

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
