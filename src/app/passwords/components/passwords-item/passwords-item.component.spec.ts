import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordsItemComponent } from './passwords-item.component';

describe('PasswordsItemComponent', () => {
  let component: PasswordsItemComponent;
  let fixture: ComponentFixture<PasswordsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordsItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
