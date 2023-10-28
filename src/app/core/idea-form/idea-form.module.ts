import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaFormComponent } from './idea-form.component';
import { IdeaFormRoutingModule } from './idea-form-routing.module';

@NgModule({
  declarations: [IdeaFormComponent],
  imports: [CommonModule, IdeaFormRoutingModule],
  exports: [],
})
export class IdeaFormModule {}
