import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css'],
})
export class IdeaFormComponent {
  formGroup: FormGroup = new FormGroup({});
  isLoading: boolean = false;
  validationMessages: any = {
    passcode: {
      required: 'Campo obrigatório',
    },
  };

  formErrors: any = {
    passcode: '',
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      passcode: ['', [Validators.required]],
    });

    this.formGroup.valueChanges.subscribe((data) => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.formGroup) {
      return;
    }
    const form = this.formGroup;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        //clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key))
              this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }
}
