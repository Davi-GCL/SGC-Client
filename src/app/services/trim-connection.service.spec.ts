import { TestBed } from '@angular/core/testing';

import { TrimConnectionService } from './trim-connection.service';

describe('TrimConnectionService', () => {
  let service: TrimConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrimConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
