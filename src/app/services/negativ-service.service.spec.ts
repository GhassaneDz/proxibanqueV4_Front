import { TestBed, inject } from '@angular/core/testing';

import { NegativService } from './negativ-service.service';

describe('NegativService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NegativService]
    });
  });

  it('should be created', inject([NegativService], (service: NegativService) => {
    expect(service).toBeTruthy();
  }));
});
