import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesFormComponent } from './employees-form.component';

describe('EmployeesFormComponent', () => {
    let component: EmployeesFormComponent;
    let fixture: ComponentFixture<EmployeesFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EmployeesFormComponent],
        });
        fixture = TestBed.createComponent(EmployeesFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
