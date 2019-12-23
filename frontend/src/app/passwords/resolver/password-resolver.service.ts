import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Password } from '../models/password.class';
import { PasswordsService } from '../services/passwords.service';

@Injectable({ providedIn: 'root' })
export class PasswordResolver implements Resolve<Password> {
  constructor(private passwordService: PasswordsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Password> | Promise<Password> | Password {
    const passwordId = +route.params.id;
    return this.passwordService.getById(passwordId);
  }
}
