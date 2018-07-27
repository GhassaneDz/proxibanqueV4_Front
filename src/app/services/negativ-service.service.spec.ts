import { TestBed, inject } from '@angular/core/testing';

import { NegativServiceService } from './negativ-service.service';

describe('NegativServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NegativServiceService]
    });
  });

  it('should be created', inject([NegativServiceService], (service: NegativServiceService) => {
    expect(service).toBeTruthy();
  }));
});
