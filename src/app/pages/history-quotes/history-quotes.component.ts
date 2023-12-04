import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-history-quotes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './history-quotes.component.html',
  styleUrls: [ './history-quotes.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryQuotesComponent { }
