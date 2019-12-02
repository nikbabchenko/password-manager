import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordsRoutingModule } from './passwords-routing.module';
import { PasswordsListComponent } from './components/passwords-list/passwords-list.component';
import { PasswordsItemComponent } from './components/passwords-item/passwords-item.component';
import { PasswordsComponent } from './pages/passwords/passwords.component';

@NgModule({
  declarations: [PasswordsListComponent, PasswordsItemComponent, PasswordsComponent],
  imports: [CommonModule, PasswordsRoutingModule]
})
export class PasswordsModule {}
