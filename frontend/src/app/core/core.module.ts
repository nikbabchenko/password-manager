import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule]
})
export class CoreModule {}
