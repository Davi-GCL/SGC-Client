import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConnectionComponent } from './form-connection.component';

describe('FormConnectionComponent', () => {
  let component: FormConnectionComponent;
  let fixture: ComponentFixture<FormConnectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormConnectionComponent]
    });
    fixture = TestBed.createComponent(FormConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
