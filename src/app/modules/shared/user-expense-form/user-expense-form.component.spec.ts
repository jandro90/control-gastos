import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExpenseFormComponent } from './user-expense-form.component';

describe('UserExpenseFormComponent', () => {
  let component: UserExpenseFormComponent;
  let fixture: ComponentFixture<UserExpenseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExpenseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExpenseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
