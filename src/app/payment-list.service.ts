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
    return this._http.get<IPayment[]>('http://13.67.75.115:80/payment-list/list'); 
    //return this._http.get<IPayment[]>('http://localhost:8089/payment-list/list'); 
  }

  savePayment(payment: string): Observable<any>{
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};
    //let options = new RequestOptions({ headers: headers });
    return this._http.post('http://13.67.75.115:80/payment-list/save',payment,headers); 
    //return this._http.post('http://localhost:8089/payment-list/save',payment,headers); 
  }

  deletePayment(id: string): Observable<any>{
    return this._http.delete('http://13.67.75.115:80/payment-list/delete/'+id);
    //return this._http.delete('http://localhost:8089/payment-list/delete/'+id);
  }

}
