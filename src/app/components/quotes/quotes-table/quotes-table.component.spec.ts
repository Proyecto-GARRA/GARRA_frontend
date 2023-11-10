import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesTableComponent } from './quotes-table.component';

describe('QuotesTableComponent', () => {
  let component: QuotesTableComponent;
  let fixture: ComponentFixture<QuotesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesTableComponent]
    });
    fixture = TestBed.createComponent(QuotesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
