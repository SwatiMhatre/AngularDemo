import { HttpErrorResponse } from '@angular/common/http';
import { PaymentList } from './../payment-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  public paymentLst = [];

  constructor(private paymentListService: PaymentList) { }

  ngOnInit() {
    this.getPaymentList();
  }

  public getPaymentList(){
    console.log("getPaymentList method called")
    this.paymentListService.getPaymentList().subscribe(
      response => {
        this.paymentLst = response;//[];	 // FILL THE ARRAY WITH DATA.
        console.log(this.paymentLst[0]);
        console.log("printing data");
        console.log(response);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }

  public deleteData(id){
    console.log("delete called for ",id);
    this.paymentListService.deletePayment(id).subscribe(
      response => {
        console.log('Data deleted!!');
        this.getPaymentList();
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
        this.getPaymentList();
      }
    );
    console.log('after delete');
  }

}
