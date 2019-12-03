import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, RouterModule],
  exports: [ModalComponent]
})
export class SharedModule {}
