import { Component, OnInit, ViewChild } from '@angular/core';
import { SecurityService } from '../shared/security/security.service';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @ViewChild('myModalClose') modalClose: any;
  constructor(private service: TodoService, private securityService: SecurityService) { }

  ToDoList: any = [];
  toDoItem: any;
  ModalTitle: any;
  canEdit: any;
  CanDelete: any;
  CanAdd:any;
  ActivateAddEditDepComp: boolean = false;
  ngOnInit(): void {
    this.refreshDepList();
    this.CanDelete = this.securityService.securityObject.CanDeleteToDoList;
    this.CanAdd = this.securityService.securityObject.CanAddToDoList;
    this.canEdit = this.securityService.securityObject.CanEditToDoList;
  }

  addClick() {
    this.toDoItem = {
      TaskId: 0,
      TaskDescription: "",
      Status: false
    }
    this.ModalTitle = "Add To-Do List";
    this.ActivateAddEditDepComp = true;
  }

  editClick(item: any) {
    this.toDoItem = item;
    this.ModalTitle = "Edit To-Do List";
    this.ActivateAddEditDepComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteToDoItem(item.TaskId).subscribe(data => {
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  canClose(item: boolean) {
    if (item === true) {
      this.modalClose.nativeElement.click();
    }
  }

  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  refreshDepList() {
    this.service.getToDoList().subscribe(data => {
      this.ToDoList = data;
    });
  }
}
