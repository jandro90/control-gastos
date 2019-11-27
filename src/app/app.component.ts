import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showExpenseForm: boolean;

  public newExpenseListener() {
    this.showExpenseForm = !this.showExpenseForm;
  }
}
