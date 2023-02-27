import { Component, Output, EventEmitter, OnInit, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../../Transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {

  @Input() transaction!: Transaction;

  histories: Transaction[] = [];
  currentDate: Date = new Date(); 
  amount: number = 0;
  balance: number = 0;
  date = `${this.currentDate.getDate()}/${this.currentDate.getMonth()+1}/${this.currentDate.getFullYear()} ${this.currentDate.getHours()}:${this.currentDate.getMinutes()}:${this.currentDate.getSeconds()} ${this.currentDate.getHours() >= 12 ? 'PM' : 'AM'}`;

  constructor(private transactionService: TransactionService, private router: Router) { 
  }
  
  ngOnInit(): void {
    this.transactionService.getHistory().subscribe((response) => {
      this.histories = response.histories;
      this.balance = this.histories[this.histories.length-1].balance;
    });
  }
  onDepositClick(type: string) {

    this.transaction = {
      amount: this.amount,
      date: this.date,
      type: type,
      balance: this.histories[this.histories.length-1].balance + Number(this.amount),
    }

    this.transactionService.depositBalance(this.transaction).subscribe(
      (transaction) =>  {
        alert("Deposit is success!");
        this.router.navigate(['/history']);
      }
    );
    
  }
  onWithdrawClick(type: string) {

    this.transaction = {
      amount: this.amount,
      date: this.date,
      type: type,
      balance: this.histories[this.histories.length-1].balance - Number(this.amount),
    }
    if(this.balance < 0) {
      alert("Insufficient Money! Please Charge Money!")
      return;
    }
    this.transactionService.withdrawBalance(this.transaction).subscribe(
      (transaction) =>  {
        alert("Withdraw is success!");
        this.router.navigate(['/history']);
      }  
    );
    
  }

}

