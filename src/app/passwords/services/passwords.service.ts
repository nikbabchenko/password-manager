import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Password } from '../models/password.class';

const passwords = [
  new Password({
    id: 1,
    website: 'http://google.com',
    username: 'ivan',
    password: '1231235553'
  }),
  new Password({
    id: 2,
    website: 'http://amazon.com',
    username: 'doe',
    password: '1231235553'
  }),
  new Password({
    id: 3,
    website: 'http://facebook.com',
    username: 'john',
    password: '1231235553'
  }),
  new Password({
    id: 4,
    website: 'http://gravatar.com',
    username: 'doe',
    password: '1231235553'
  }),
  new Password({
    id: 5,
    website: 'http://mobile-review.com',
    username: 'ivan',
    password: '1231235553'
  }),
  new Password({
    id: 6,
    website: 'http://aliexpress.com',
    username: 'ivan',
    password: '1231235553'
  })
];

@Injectable({ providedIn: 'root' })
export class PasswordsService {
  passwordsList = passwords;
  getPasswords() {
    return of(this.passwordsList);
  }

  getById(id: number): Password {
    return this.passwordsList.find(item => item.id === id);
  }

  updatePassword(updatedPassword) {
    this.passwordsList.forEach((value, index, array) => {
      if (value.id === updatedPassword.id) {
        array[index] = updatedPassword;
      }
    });
  }
}
