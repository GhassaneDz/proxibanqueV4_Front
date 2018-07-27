import { TestBed, inject } from '@angular/core/testing';

import { PositivServiceService } from './positiv-service.service';

describe('PositivServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositivServiceService]
    });
  });

  it('should be created', inject([PositivServiceService], (service: PositivServiceService) => {
    expect(service).toBeTruthy();
  }));
});
