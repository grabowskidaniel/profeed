import { TestBed } from '@angular/core/testing';

import { ProfeedService } from './profeed.service';

describe('ProfeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfeedService = TestBed.get(ProfeedService);
    expect(service).toBeTruthy();
  });
});
