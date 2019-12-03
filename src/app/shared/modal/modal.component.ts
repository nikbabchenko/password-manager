import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('modalContainer', { static: true }) modalContainer: ElementRef<HTMLElement>;

  @HostListener('keyup', ['$event'])
  onEscape(ev) {
    console.log('--keyp', ev);

    this.closeModal();
  }

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.modalContainer.nativeElement.focus();
  }

  closeModal() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
