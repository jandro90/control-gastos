import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IExpense } from 'src/app/interfaces/expense.interface';

@Component({
  selector: 'app-user-expense-form',
  templateUrl: './user-expense-form.component.html',
  styleUrls: ['./user-expense-form.component.scss']
})
export class UserExpenseFormComponent implements OnInit {
  @Output() saveExpenseListener: EventEmitter<IExpense> = new EventEmitter();
  @Output() cancelExpenseListener: EventEmitter<any> = new EventEmitter();

  public formGroup: FormGroup;

  ngOnInit() {
    this.generateForm();
  }

  private generateForm() {
    this.formGroup = new FormGroup({
      date: new FormControl(null),
      concept: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required)
    });
  }

  public onSaveExpense() {
    if (this.formGroup.valid) {
      const expenseValues = this.formGroup.getRawValue();
      expenseValues.date ? expenseValues.date = new Date(expenseValues.date) : expenseValues.date = new Date();
      this.saveExpenseListener.emit(expenseValues);
      this.formGroup.reset();
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  public onCancelExpense() {
    this.cancelExpenseListener.emit();
  }
}
