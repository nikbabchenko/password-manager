import { Component, OnInit, Input } from '@angular/core';
import { Password } from '../../models/password.class';

@Component({
  selector: 'pm-passwords-list',
  templateUrl: './passwords-list.component.html',
  styleUrls: ['./passwords-list.component.scss']
})
export class PasswordsListComponent implements OnInit {
  @Input() passwords: Password[];
  constructor() {}

  ngOnInit() {}
}
