import { TestBed } from '@angular/core/testing';

import { GeneratedFilesMapperService } from './generated-files.mapper.service';

describe('GeneratedFilesMapperService', () => {
  let service: GeneratedFilesMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratedFilesMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
