import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormErrorMessageComponent } from './form-error-message/form-error-message.component';

@NgModule({
  declarations: [FormErrorMessageComponent],
  imports: [CommonModule, RouterModule],
  exports: [FormErrorMessageComponent]
})
export class SharedModule {}
