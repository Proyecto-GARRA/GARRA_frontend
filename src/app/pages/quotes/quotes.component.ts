import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Cita } from 'src/app/interfaces/cita';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent {
    public citas!: Cita[];
    items: MenuItem[] | undefined;
    home: MenuItem | undefined;

    constructor(private quotesService: QuotesService) {}

    ngOnInit() {
        this.items = [{ label: 'Lista de citas' }];
        this.home = { icon: 'pi pi-home', routerLink: 'lista-citas' };

        this.quotesService.getCitas().subscribe(citas => {
            this.citas = citas;
        });
    }
}
