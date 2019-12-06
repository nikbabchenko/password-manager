import { Component, OnInit } from '@angular/core';
import { Password } from '../../models/password.class';

@Component({
  selector: 'pm-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.scss']
})
export class PasswordEditComponent implements OnInit {
  password: Password;
  constructor() {}

  ngOnInit() {}
}
