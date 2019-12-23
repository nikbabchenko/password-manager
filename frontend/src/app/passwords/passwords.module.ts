import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PasswordsRoutingModule } from './passwords-routing.module';
import { PasswordsListComponent } from './components/passwords-list/passwords-list.component';
import { PasswordsItemComponent } from './components/passwords-item/passwords-item.component';
import { PasswordsComponent } from './pages/passwords/passwords.component';
import { PasswordDetailsComponent } from './pages/password-details/password-details.component';
import { PasswordEditComponent } from './pages/password-edit/password-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PasswordsListComponent,
    PasswordsItemComponent,
    PasswordsComponent,
    PasswordDetailsComponent,
    PasswordEditComponent
  ],
  imports: [CommonModule, SharedModule, PasswordsRoutingModule, FormsModule, ReactiveFormsModule]
})
export class PasswordsModule {}
