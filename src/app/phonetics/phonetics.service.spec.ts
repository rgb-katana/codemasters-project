import { TestBed } from '@angular/core/testing';

import { PhoneticsService } from './phonetics.service';

describe('PhoneticsService', () => {
  let service: PhoneticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
