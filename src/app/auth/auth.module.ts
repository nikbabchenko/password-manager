import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormErrorMessageComponent } from './components/form-error-message/form-error-message.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, FormErrorMessageComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule]
})
export class AuthModule {}
