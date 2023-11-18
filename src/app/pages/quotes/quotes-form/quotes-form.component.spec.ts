import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesFormComponent } from './quotes-form.component';

describe('QuotesFormComponent', () => {
  let component: QuotesFormComponent;
  let fixture: ComponentFixture<QuotesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesFormComponent]
    });
    fixture = TestBed.createComponent(QuotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
