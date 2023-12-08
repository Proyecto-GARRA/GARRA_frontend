import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Cita } from 'src/app/interfaces/cita';
import { Cliente } from 'src/app/interfaces/cliente';
import { Empleado } from 'src/app/interfaces/empleado';
import { QuotesService } from 'src/app/services/quotes.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'quotes-detail',
    templateUrl: './quotes-detail.component.html',
    styleUrls: ['./quotes-detail.component.scss'],
})
export class QuotesDetailComponent {
    citas: Cita[] = [];
    cita: Cita;
    cliente: Cliente;
    empleado: Empleado;
    items: MenuItem[] | undefined;
    home: MenuItem | undefined;

    constructor(
        private quotesService: QuotesService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.items = [
            { label: 'Lista de citas' },
            { label: 'Detalle de cita' },
        ];
        this.home = { icon: 'pi pi-home', routerLink: 'lista-citas' };

        this.activatedRoute.paramMap.subscribe(params => {
            let id: number = +params.get('id');
            if (id) {
                this.quotesService.getCita(id).subscribe(cita => {
                    this.cita = cita;
                });
            }
        });
    }

    exportPdf() {
        import('jspdf').then(jsPDF => {
            const doc = new jsPDF.default();

            doc.setFontSize(20);
            doc.setTextColor(40);
            doc.text('Detalles de la Cita', 20, 20);

            // Separador
            doc.setLineWidth(0.5);
            doc.line(20, 30, 190, 30);

            // Contenido del detalle que quieres exportar

            const detalle = `
            Id de la cita: ${this.cita?.id || ''}

            Nombre del cliente:

            Nombre del empleado: ${this.empleado?.nombreDelEmpleado || ''}

            Tipo de servicio:

            Fecha de la cita: ${this.cita?.fecha_cita || ''}

            Hora de la cita: ${this.cita?.hora_cita || ''}

            Dirección: ${this.cita?.direccion || ''}
        `;

            // Agregar el contenido al documento PDF
            doc.setFontSize(12);
            doc.setTextColor(0);
            doc.text(detalle, 20, 40);

            const lineYFirmar = doc.internal.pageSize.height - 20; // Ajusta la posición según tus necesidades
            const lineaLargo = 100; // Ajusta la longitud de la línea según tus necesidades
            const lineaXInicio = (doc.internal.pageSize.width - lineaLargo) / 2;
            const lineaXFin = lineaXInicio + lineaLargo;
            doc.line(lineaXInicio, lineYFirmar, lineaXFin, lineYFirmar);

            // Centrar "Firmar" horizontalmente respecto a la línea
            const textoFirmar = 'Firmar';
            const textoWidth = doc.getTextDimensions(textoFirmar).w;
            const textoX = (lineaXInicio + lineaXFin - textoWidth) / 2;

            doc.setFontSize(16);
            doc.setTextColor(0);
            doc.text(textoFirmar, textoX, lineYFirmar + 10); // Ajusta la posición vertical según tus necesidades

            doc.save('Cita.pdf');
        });
    }

    eliminar(eliminarCita: Cita): void {
        Swal.fire({
            title: 'Eliminar',
            text: `¿Esta seguro de eliminar la cita del cliente ${this.cita.id}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si eliminar!',
        }).then(result => {
            if (result.value) {
                this.quotesService
                    .delete(eliminarCita.id)
                    .subscribe(response => {
                        this.citas = this.citas.filter(cita => cita !== cita);
                        Swal.fire(
                            'Cita eliminada!',
                            `La cita ${this.cita.id} ah sido eliminado`,
                            'success'
                        );
                    });
            }
        });
    }

    atras() {
        history.back();
    }
}
