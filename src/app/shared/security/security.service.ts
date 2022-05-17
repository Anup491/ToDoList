import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AppUser } from 'src/app/security/app-user';
import { AppUserAuth } from 'src/app/security/app-user-auth';
import { MessageService } from '../messaging/message.service';
import { Injectable } from '@angular/core';

const API_ENDPOINT = "security/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();
  apiUrl: string = "";
  private hasChanged = new BehaviorSubject<number>(0);
  securityReset = this.hasChanged.asObservable();
  constructor(private http: HttpClient,
    private msgService: MessageService) {
    this.apiUrl = "https://localhost:44328/api/Security/";;
  }

  logInUser(value: AppUser): Observable<AppUserAuth> {
    delete value.userId;

    return this.http.post<AppUserAuth>(this.apiUrl + "Login",
    value, httpOptions).pipe(
        tap(resp => {
          Object.assign(this.securityObject, resp);
          this.hasChanged.next(0);
        }),
        catchError(
          this.handleError<AppUserAuth>('Login',
            'Invalid user name/password', new AppUserAuth()))
      );
  }

  logOutUser(): void {
    this.securityObject.init();
    this.hasChanged.next(0);
  }
  private handleError<T>(operation = 'operation', msg = '', result?: T) {
    return (error: any): Observable<T> => {
      this.msgService.clearValidationMessages();

      msg = "Status Code: " + error.status + " - " + msg || "";

      console.log(msg + " " + JSON.stringify(error));

      // Set the last exception generated
      this.msgService.lastException = error;

      switch (error.status) {
        case 400:  
          if (error.error) {
            Object.keys(error.error.errors)
              .map(keyName => this.msgService
                .addValidationMessage(error.error.errors[keyName][0]));
            this.msgService.validationMessages = this.msgService.validationMessages.reverse();
          }
          break;
        case 404:
          this.msgService.addExceptionMessage(msg);
          break;
        case 500:
          this.msgService.addExceptionMessage(error.error);
          break;
        case 0:
          this.msgService.addExceptionMessage(
            "Unknown error, check to make sure the Web API URL can be reached." + " - ERROR: " + JSON.stringify(error));
          break;
        default:
          this.msgService.addException(error);
          break;
      }
      return of(result as T);
    };
  }
}
