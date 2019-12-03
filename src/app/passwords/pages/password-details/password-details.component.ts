import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PasswordsService } from '../../services/passwords.service';
import { Password } from '../../models/password.class';

@Component({
  selector: 'pm-password-details',
  templateUrl: './password-details.component.html',
  styleUrls: ['./password-details.component.scss']
})
export class PasswordDetailsComponent implements OnInit {
  password: Password;
  constructor(private route: ActivatedRoute, private passwordService: PasswordsService) {}

  ngOnInit() {
    const passwordId = this.route.snapshot.paramMap.get('id');
    this.password = this.passwordService.getById(+passwordId);
    console.log('--data.title', this.route.snapshot.data['title']);
  }
}
