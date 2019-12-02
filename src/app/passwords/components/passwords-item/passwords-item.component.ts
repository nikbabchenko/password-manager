import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pm-passwords-item',
  templateUrl: './passwords-item.component.html',
  styleUrls: ['./passwords-item.component.scss']
})
export class PasswordsItemComponent implements OnInit {
  @Input()
  password;
  constructor() {}

  ngOnInit() {}
}
