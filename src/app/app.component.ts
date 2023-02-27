import { Component } from '@angular/core';
import { Transaction } from './Transaction'; 
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private TransactionService: TransactionService) {}
  transaction: Transaction[] = [];
 }
