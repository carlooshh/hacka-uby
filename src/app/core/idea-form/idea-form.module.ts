import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaFormComponent } from './idea-form.component';
import { IdeaFormRoutingModule } from './idea-form-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [IdeaFormComponent],
  imports: [
    CommonModule,
    IdeaFormRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [],
})
export class IdeaFormModule {}
