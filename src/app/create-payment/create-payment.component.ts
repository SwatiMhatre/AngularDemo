import { PaymentList } from './../payment-list.service';
import { CreditAcService } from './../credit-ac.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

  private debitAcs: string;
  private creditAcs: string;
  payment = {};
  setp1Tab: boolean = false;
  setp2Tab: boolean = true;
  step3Tab: boolean = true;
  private acno: any;
  selectedTab = 0;
  public beneficiaryName: string;
  public accountType: string;
  submitted = false;

  createForm: FormGroup;

  get f() { return this.createForm.controls; }

  constructor(private creditAcService: CreditAcService, private paymentListService: PaymentList, private parserFormatter: NgbDateParserFormatter, formBuilder: FormBuilder, public router: Router) {
    this.createForm = formBuilder.group({
      creditAccount: ['', [Validators.required]],
      debitAccount: ['', [Validators.required]],
      reason: [''],
      amount: ['', [Validators.required]],
      //amount: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      currency: ['', [Validators.required]],
      executionDate: ['', [Validators.required]],
    });
  }

  hasPunctuation(punctuation: string, errorType: string) {
    return function (input: FormControl) {
      return (input == null || input.value == null ? null : input.value.indexOf(punctuation) >= 0) ?
        { [errorType]: true } : null;
    };
  }

  ngOnInit() {
    this.getDebitAc();
    this.getCreditAc();
  }

  public getDebitAc() {
    console.log("getDebitAc method called")
    this.creditAcService.getDebitAc().subscribe(
      response => {
        this.debitAcs = response as string;//[];	 // FILL THE ARRAY WITH DATA.
        console.log(this.debitAcs[0]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

  }

  public getCreditAc() {
    console.log("getCreditAc method called")
    this.creditAcService.getCreditAc().subscribe(
      response => {
        this.creditAcs = response as string;//[];	 // FILL THE ARRAY WITH DATA.
        console.log(this.creditAcs[0]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  private cancel() {
    this.router.navigate(['/']);
  }

  public createPayment(t) {
    console.log("createForm:::" + JSON.stringify(this.createForm.value));
    console.log("debtAccount::", this.createForm.value['debitAccount']);
    console.log("amount", this.createForm.value['amount']);
    console.log('isInvalid', this.createForm.invalid);
    if (!this.createForm.invalid) {
      this.setp1Tab = true;
      this.setp2Tab = false;
      this.step3Tab = false;
      this.initializeFormData(t);
      //console.log("creditAcs",JSON.parse(this.creditAcs).find(item=> item.accountNumber === "7230000246"));
      console.log(this.createForm.value['creditAccount']);
      this.acno = this.createForm.value['creditAccount'];
      console.log("creditAcs", JSON.parse(JSON.stringify(this.creditAcs)).find(item => item.accountNumber == this.createForm.value['creditAccount']));
      this.beneficiaryName = JSON.parse(JSON.stringify(this.creditAcs)).find(item => item.accountNumber == this.createForm.value['creditAccount']);
      this.accountType = JSON.parse(JSON.stringify(this.debitAcs)).find(item => item.accountNumber == this.createForm.value['debitAccount']);
    } else {
      this.createForm.get('amount').markAsTouched();
      this.createForm.get('creditAccount').markAsTouched();
      this.createForm.get('debitAccount').markAsTouched();
      this.createForm.get('currency').markAsTouched();
      this.createForm.get('executionDate').markAsTouched();
    }
    this.submitted = true;
  }

  private initializeFormData(createForm) {
    this.createForm.value['creditAccount'] = createForm.creditAccount;
    this.createForm.value['debitAccount'] = createForm.debitAccount;
    this.createForm.value['reason'] = createForm.reason;
    this.createForm.value['amount'] = createForm.amount;
    this.createForm.value['currency'] = createForm.currency;
    this.createForm.value['executionDate'] = createForm.executionDate;
  }

  public postData(post) {
    console.log('post::', post);
    console.log("this.amount ", this.createForm.value['amount'])
    this.createForm.value['creditAccount'] = post.creditAccount;
    this.createForm.value['debitAccount'] = post.debitAccount;
    this.createForm.value['reason'] = post.reason;
    this.createForm.value['amount'] = post.amount;
    this.createForm.value['currency'] = post.currency;
    this.createForm.value['executionDate'] = post.executionDate;
    this.paymentListService.savePayment(JSON.stringify(post)).subscribe(
      response => {
        console.log('Data saved!!');
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}