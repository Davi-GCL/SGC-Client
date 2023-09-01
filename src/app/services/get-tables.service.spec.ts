import { TestBed } from '@angular/core/testing';

import { GetTablesService } from './get-tables.service';

describe('GetTablesService', () => {
  let service: GetTablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
