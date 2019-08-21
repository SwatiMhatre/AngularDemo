import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPaymentComponent } from './review-payment.component';

describe('ReviewPaymentComponent', () => {
  let component: ReviewPaymentComponent;
  let fixture: ComponentFixture<ReviewPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
