import { TestBed } from '@angular/core/testing';

import { CreditAcService } from './credit-ac.service';

describe('CreditAcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreditAcService = TestBed.get(CreditAcService);
    expect(service).toBeTruthy();
  });
});
