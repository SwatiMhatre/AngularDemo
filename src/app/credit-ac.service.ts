import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDebitAcc } from './debitAcc';
import { ICreditAcc } from './creditAcc';

@Injectable({
  providedIn: 'root'
})
export class CreditAcService {


  constructor(private _http: HttpClient) {}

    getDebitAc(): Observable<any>{
      const GET_DEBIT_AC = 'http://paymentrestapi-env.kjkqx2u3gn.ap-south-1.elasticbeanstalk.com/debitac/getAll';
      return this._http.get<IDebitAcc[]>(GET_DEBIT_AC); 
      //return this._http.get<IDebitAcc[]>('http://localhost:8083/debitac/getAll'); 
    }

    getCreditAc(): Observable<any>{
      const GET_CREDIT_AC = 'http://paymentrestapi-env.kjkqx2u3gn.ap-south-1.elasticbeanstalk.com/creditac/getAll';
      return this._http.get<ICreditAcc[]>(GET_CREDIT_AC);
      //return this._http.get<ICreditAcc[]>('http://localhost:8083/creditac/getAll');
    }
}
