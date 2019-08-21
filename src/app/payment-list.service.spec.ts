import { TestBed } from '@angular/core/testing';

import { PaymentList } from './payment-list.service';

describe('PaymentList.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentList = TestBed.get(PaymentList);
    expect(service).toBeTruthy();
  });
});
