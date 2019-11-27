import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-expense-list',
  templateUrl: './user-expense-list.component.html',
  styleUrls: ['./user-expense-list.component.scss']
})
export class UserExpenseListComponent {
  @Input() expenseList;
  @Output() newExpenseListener = new EventEmitter();

  public newExpense($event) {
    this.newExpenseListener.emit($event);
  }
}
