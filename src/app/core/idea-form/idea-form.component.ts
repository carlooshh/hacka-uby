import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css'],
})
export class IdeaFormComponent implements OnInit {
  name: string = '';
  email: string = '';

  formGroup: FormGroup = new FormGroup({});
  isLoading: boolean = false;
  validationMessages: any = {
    email: {
      required: 'Campo obrigatório',
    },
    challenge: {
      required: 'Campo obrigatório',
    },
    solution: {
      required: 'Campo obrigatório',
    },
    gain: {
      required: 'Campo obrigatório',
    },
    passcode: {
      required: 'Campo obrigatório',
    },
  };

  formErrors: any = {
    name: '',
    email: '',
    challenge: '',
    solution: '',
    gain: '',
    passcode: '',
  };

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (param: { name?: string; email?: string }) => {
        console.log(param);
        this.formGroup.patchValue({
          name: param.name,
          email: param.email,
        });
      }
    );
  }

  createForm() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      challenge: ['', [Validators.required]],
      solution: ['', [Validators.required]],
      gain: ['', [Validators.required]],
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
