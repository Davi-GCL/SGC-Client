import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioSgbdComponent } from './radio-sgbd.component';

describe('RadioSgbdComponent', () => {
  let component: RadioSgbdComponent;
  let fixture: ComponentFixture<RadioSgbdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioSgbdComponent]
    });
    fixture = TestBed.createComponent(RadioSgbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
