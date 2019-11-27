import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-expense-form',
  templateUrl: './user-expense-form.component.html',
  styleUrls: ['./user-expense-form.component.scss']
})
export class UserExpenseFormComponent implements OnInit {
  public formGroup: FormGroup;

  constructor() {}

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
}
