import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: [ './client-detail.component.scss' ],
})
export class ClientDetailComponent {
  clientes!: Cliente[];

}
