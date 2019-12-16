import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

const LOCALSTORAGE_LOGIN_CONST = '$$$IS_LOGGEDIN_STATUS';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn$ = new BehaviorSubject(false);

  constructor() {
    this.isLoggedIn = !!localStorage.getItem(LOCALSTORAGE_LOGIN_CONST);
  }

  isLoggedInUser$() {
    return this.isLoggedIn$.asObservable();
  }

  get isLoggedIn() {
    return this.isLoggedIn$.getValue();
  }

  set isLoggedIn(isLoggedIn: boolean) {
    if (isLoggedIn) {
      localStorage.setItem(LOCALSTORAGE_LOGIN_CONST, 'true');
    } else {
      localStorage.removeItem(LOCALSTORAGE_LOGIN_CONST);
    }

    this.isLoggedIn$.next(isLoggedIn);
  }

  singUp() {
    return of(true).pipe(
      delay(300),
      tap(() => (this.isLoggedIn = true))
    );
  }

  login() {
    return of(true).pipe(
      delay(300),
      tap(() => (this.isLoggedIn = true))
    );
  }

  logout() {
    this.isLoggedIn = false;
  }
}
