import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Password } from '../../models/password.class';

@Component({
  selector: 'pm-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.scss']
})
export class PasswordEditComponent implements OnInit {
  password: Password;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.password = this.route.snapshot.data['passwordData'];
  }
}
