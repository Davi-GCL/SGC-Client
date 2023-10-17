import { TestBed } from '@angular/core/testing';

import { UiHelpersService } from './ui-helpers.service';

describe('UiHelpersService', () => {
  let service: UiHelpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiHelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
