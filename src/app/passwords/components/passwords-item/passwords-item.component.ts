import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-passwords-item',
  templateUrl: './passwords-item.component.html',
  styleUrls: ['./passwords-item.component.scss']
})
export class PasswordsItemComponent implements OnInit {
  @Input()
  password;
  constructor(private router: Router) {}

  ngOnInit() {}

  getLink(id: number) {
    return `/passwords/${id}`;
  }
}
