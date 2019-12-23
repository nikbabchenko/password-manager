import { Component, OnInit, Input } from '@angular/core';
import { PasswordsService } from '../../services/passwords.service';
import { Password } from '../../models/password.class';

@Component({
  selector: 'pm-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.scss']
})
export class PasswordsComponent implements OnInit {
  passwordsList: Password[] = [];
  constructor(private passwordsService: PasswordsService) {}

  ngOnInit() {
    this.passwordsService.getPasswords().subscribe(passwordsList => (this.passwordsList = passwordsList));
  }
}
