import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { FormErrorMessageComponent } from './form-error-message/form-error-message.component';

@NgModule({
  declarations: [ModalComponent, FormErrorMessageComponent],
  imports: [CommonModule, RouterModule],
  exports: [ModalComponent, FormErrorMessageComponent]
})
export class SharedModule {}
