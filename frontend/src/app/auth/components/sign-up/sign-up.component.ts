import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

import { passwordsMatcher } from './validators/passwordsMatcher';

@Component({
  selector: 'pm-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  errors = {
    firstName: {
      required: 'First name is required'
    },
    lastName: {
      required: 'Last name is required'
    },
    passwordGroup: {
      passwordsMatch: 'Not matched passwords',
      password: {
        required: 'Password is required',
        minlength: 'minimum 4 symbols'
      },
      confirmPassword: {
        required: 'Confirm Password is required'
      }
    },
    acceptPrivacyPolicy: {
      required: 'Accept Privacy Policy is required'
    },
    email: {
      email: 'Not valid email pattern',
      required: 'Email is required'
    }
  };
  singUpForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.singUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      passwordGroup: new FormGroup(
        {
          password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
          confirmPassword: new FormControl(null, Validators.required)
        },
        { validators: passwordsMatcher }
      ),
      acceptPrivacyPolicy: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (!this.singUpForm.valid) {
      return;
    }

    this.authService.singUp().subscribe(() => {
      let redirectUrl = null;
      if (this.route.snapshot.queryParamMap.get('redirectUrl')) {
        redirectUrl = encodeURI(this.route.snapshot.queryParamMap.get('redirectUrl'));
      }
      this.router.navigateByUrl(redirectUrl ? redirectUrl : '/');
    });
  }
}
