import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IExpense } from 'src/app/interfaces/expense.interface';

@Component({
  selector: 'app-user-expense-list',
  templateUrl: './user-expense-list.component.html',
  styleUrls: ['./user-expense-list.component.scss']
})

export class UserExpenseListComponent {
  @Input() expenseList: IExpense[];
  @Output() newExpenseListener = new EventEmitter();

  public newExpense($event) {
    this.newExpenseListener.emit($event);
  }
}
