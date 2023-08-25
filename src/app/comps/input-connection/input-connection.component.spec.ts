import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputConnectionComponent } from './input-connection.component';

describe('InputConnectionComponent', () => {
  let component: InputConnectionComponent;
  let fixture: ComponentFixture<InputConnectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputConnectionComponent]
    });
    fixture = TestBed.createComponent(InputConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
