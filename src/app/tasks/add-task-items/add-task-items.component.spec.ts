import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskItemsComponent } from './add-task-items.component';

describe('AddTaskItemComponent', () => {
  let component: AddTaskItemsComponent;
  let fixture: ComponentFixture<AddTaskItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaskItemsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
