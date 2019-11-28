import { TestBed } from '@angular/core/testing';

import { BrewlogService } from './brewlog.service';

describe('BrewlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrewlogService = TestBed.get(BrewlogService);
    expect(service).toBeTruthy();
  });
});
