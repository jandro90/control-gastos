import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserExpenseListComponent } from './user-expense-list/user-expense-list.component';
import { UserExpenseFormComponent } from './user-expense-form/user-expense-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        UserExpenseListComponent,
        UserExpenseFormComponent
    ],
    providers: [],
    exports: [
        UserExpenseListComponent,
        UserExpenseFormComponent
    ],
})
export class SharedModule { }
