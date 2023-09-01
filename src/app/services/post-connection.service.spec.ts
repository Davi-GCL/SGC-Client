import { TestBed } from '@angular/core/testing';

import { PostConnectionService } from './post-connection.service';

describe('PostConnectionService', () => {
  let service: PostConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
