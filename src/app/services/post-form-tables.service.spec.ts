import { TestBed } from '@angular/core/testing';

import { PostFormTablesService } from './post-form-tables.service';

describe('PostFormTablesService', () => {
  let service: PostFormTablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFormTablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
