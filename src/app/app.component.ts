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
    expenseList ? this.shortExpenseList(expenseList) : this.expenseList = [];
  }

  private shortExpenseList(expenseList: IExpense[]) {
    this.expenseList = expenseList.sort((a: any, b: any) =>  new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  public toggleForm() {
    this.showExpenseForm = !this.showExpenseForm;
  }

  public saveExpense(expense: IExpense) {
    const currentExpenseList = [...this.expenseList];
    currentExpenseList.push(expense);
    this.shortExpenseList(currentExpenseList);
    this.storageService.save('expenseList', JSON.stringify(this.expenseList));
  }
}
