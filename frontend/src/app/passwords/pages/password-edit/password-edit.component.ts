import { Component, OnInit } from '@angular/core';
import { Password } from '../../models/password.class';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordsService } from '../../services/passwords.service';

@Component({
  selector: 'pm-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.scss']
})
export class PasswordEditComponent implements OnInit {
  passwordForm: FormGroup;
  password: Password;

  errors = {
    website: {
      required: 'Website is required'
    },
    username: {
      required: 'Username is required'
    },
    password: {
      required: 'Password is required',
      minlength: 'minimum 4 symbols'
    }
  };

  constructor(private passwordsService: PasswordsService, private router: Router, private route: ActivatedRoute) {
    this.passwordForm = new FormGroup({
      website: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit() {
    const passwordId = this.route.snapshot.paramMap.get('id');
    this.password = this.passwordsService.getById(+passwordId);
    this.passwordForm.patchValue(this.password);
  }

  onSubmit() {
    if (!this.passwordForm.valid) {
      return;
    }

    this.passwordsService.updatePassword({ id: this.password.id, ...this.passwordForm.value });
    this.router.navigateByUrl(`passwords/${this.password.id}`);
  }
}
