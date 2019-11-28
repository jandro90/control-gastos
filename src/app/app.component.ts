import { Component, OnInit } from '@angular/core';

import { StorageService } from './storage.service';
import { IExpense } from './interfaces/expense.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public showExpenseForm: boolean;
  public expenseList: IExpense[];

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.setExpenseList();
  }

  private setExpenseList() {
    const expenseList = JSON.parse(this.storageService.get('expenseList'));

    if (expenseList && expenseList.length > 0) {
      const shortExpenseList =  expenseList.sort((a: any, b: any) =>  new Date(a.date).getTime() - new Date(b.date).getTime());
      this.expenseList = shortExpenseList;
    } else {
      this.expenseList = [];
    }
  }

  public toggleForm() {
    this.showExpenseForm = !this.showExpenseForm;
  }

  public saveExpense(expense: IExpense) {
    this.expenseList.push(expense);
    this.storageService.save('expenseList', JSON.stringify(this.expenseList));
  }

}
