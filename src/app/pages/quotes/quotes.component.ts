import { Component } from '@angular/core';
import { Cita } from 'src/app/interfaces/cita';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.scss'],
})
export class QuotesComponent {
  public citas!: Cita[];

  constructor(private quotesService:QuotesService) {}

  ngOnInit() {
    this.quotesService.getCitas().subscribe(
      citas =>{  this.citas = citas; });
  }

}
