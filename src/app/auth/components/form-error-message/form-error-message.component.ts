import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

const get = (obj, path, defaultValue) => {
  const result = String.prototype.split
    .call(path, /[,[\].]+?/)
    .filter(Boolean)
    .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  return result === undefined || result === obj ? defaultValue : result;
};

@Component({
  selector: 'pm-form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.scss']
})
export class FormErrorMessageComponent implements OnInit {
  @Input() nameField: string;
  @Input() errors: object;
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit() {}

  getError(formControlName: string) {
    const formControlErrors = this.form.get(formControlName).errors;

    if (!formControlErrors) {
      return '';
    }

    const errKey = Object.keys(this.form.get(formControlName).errors)[0];
    return get(this.errors, `${formControlName}.${errKey}`, '');
  }

  displayError(formControlName: string) {
    return this.form.get(formControlName).invalid && this.form.get(formControlName).touched;
  }
}
