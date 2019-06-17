import { TestBed } from '@angular/core/testing';

import { CategorysortService } from './categorysort.service';

describe('CategorysortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorysortService = TestBed.get(CategorysortService);
    expect(service).toBeTruthy();
  });
});
