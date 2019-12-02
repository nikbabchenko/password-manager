import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordsComponent } from './pages/passwords/passwords.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordsRoutingModule {}
