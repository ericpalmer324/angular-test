import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../Transaction';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:5000/db';
  private apiDUrl = 'http://localhost:5000/histories';

  constructor(private http: HttpClient) {}

  getHistory(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  depositBalance(transaction: Transaction): Observable<any> {
    return this.http.post<Transaction>(this.apiDUrl, transaction, httpOptions);
  }
  withdrawBalance(transaction: Transaction): Observable<any> {
    return this.http.post<Transaction>(this.apiDUrl, transaction, httpOptions);
  }
}
