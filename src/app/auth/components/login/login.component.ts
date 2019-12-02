import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isFormSubmitted = false;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  displayError(formControlName: string) {
    return (
      this.loginForm.get(formControlName).invalid &&
      (this.loginForm.get(formControlName).touched || this.isFormSubmitted)
    );
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
      this.authService.login().subscribe(() => {
        let redirectUrl = null;
        if (this.route.snapshot.queryParamMap.get('redirectUrl')) {
          redirectUrl = encodeURI(this.route.snapshot.queryParamMap.get('redirectUrl'));
        }
        this.router.navigateByUrl(redirectUrl ? redirectUrl : '/');
      });
    }
  }
}
