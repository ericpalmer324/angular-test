import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../Transaction';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  histories: Transaction[] = [];
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getHistory().subscribe((response) => {
      this.histories = response.histories;
    });
  }
}
