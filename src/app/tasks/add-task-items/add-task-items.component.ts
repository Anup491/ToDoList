import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-add-task-items',
  templateUrl: './add-task-items.component.html',
  styleUrls: ['./add-task-items.component.css']
})
export class AddTaskItemsComponent implements OnInit {

  constructor(private service: TodoService) { }

  TaskId: any;
  TaskDescription: any;
  Status: any;
  @Input() toDoItem: any;
  @Output() canClose = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.TaskId = this.toDoItem.TaskId;
    this.TaskDescription = this.toDoItem.Description;
    this.Status = this.toDoItem.Status;
  }

  addTask() {
    if (this.TaskDescription === undefined) {
      alert('Please insert Task to update');
      return;
    }
    var val = {
      TaskId: this.TaskId,
      Description: this.TaskDescription,
      Status: this.Status
    };
    this.service.addToDoItem(val).subscribe(res => {
      alert(res.toString());
      this.canClose.emit(true);
    });
  }

  updateTask() {
    var val = {
      TaskId: this.TaskId,
      Description: this.TaskDescription,
      Status: this.Status
    };
    this.service.updateToDoItem(val).subscribe(res => {
      alert(res.toString());
      this.canClose.emit(true);
    });
  }
}