import { TestBed, inject } from '@angular/core/testing';

import { PositivService } from './positiv-service.service';

describe('PositivService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositivService]
    });
  });

  it('should be created', inject([PositivService], (service: PositivService) => {
    expect(service).toBeTruthy();
  }));
});
