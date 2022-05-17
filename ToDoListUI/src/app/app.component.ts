import { Component, OnInit } from '@angular/core';
import { AppUserAuth } from './security/app-user-auth';
import { SecurityService } from './shared/security/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDoListUI';
  securityObject: AppUserAuth | undefined;

  constructor(private service: SecurityService) {
    this.securityObject = service.securityObject;
  }

  ngOnInit(): void {
  }

  logOut() {
    this.service.logOutUser();
    this.securityObject = this.service.securityObject;
    localStorage.removeItem("AuthObject");
  }
}
