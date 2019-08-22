import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPayment } from './payment-list';

@Injectable({
  providedIn: 'root'
})
export class PaymentList {

  constructor(private _http: HttpClient) {}
  getPaymentList(): Observable<any>{
    return this._http.get<IPayment[]>('http://paymentrestapi-env.kjkqx2u3gn.ap-south-1.elasticbeanstalk.com/payment-list/list'); 
    //return this._http.get<IPayment[]>('http://localhost:8089/payment-list/list'); 
  }

  savePayment(payment: string): Observable<any>{
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};
    //let options = new RequestOptions({ headers: headers });
    return this._http.post('http://paymentrestapi-env.kjkqx2u3gn.ap-south-1.elasticbeanstalk.com/payment-list/save',payment,headers); 
    //return this._http.post('http://localhost:8089/payment-list/save',payment,headers); 
  }

  deletePayment(id: string): Observable<any>{
    return this._http.delete('http://paymentrestapi-env.kjkqx2u3gn.ap-south-1.elasticbeanstalk.com/payment-list/delete/'+id);
    //return this._http.delete('http://localhost:8089/payment-list/delete/'+id);
  }

}
