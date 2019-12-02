import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordsComponent } from './pages/passwords/passwords.component';
import { PasswordsItemComponent } from './components/passwords-item/passwords-item.component';
import { PasswordDetailsComponent } from './pages/password-details/password-details.component';
import { PasswordEditComponent } from './pages/password-edit/password-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordsComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: PasswordDetailsComponent
  },
  {
    path: 'edit/:id',
    component: PasswordEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordsRoutingModule {}
