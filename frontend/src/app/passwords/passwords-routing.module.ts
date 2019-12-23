import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordsComponent } from './pages/passwords/passwords.component';
import { PasswordsItemComponent } from './components/passwords-item/passwords-item.component';
import { PasswordDetailsComponent } from './pages/password-details/password-details.component';
import { PasswordEditComponent } from './pages/password-edit/password-edit.component';
import { PasswordResolver } from './resolver/password-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PasswordsComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: PasswordDetailsComponent,
    data: { title: 'Password Details' }
  },
  {
    path: 'edit/:id',
    component: PasswordEditComponent,
    resolve: {
      passwordData: PasswordResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordsRoutingModule {}
