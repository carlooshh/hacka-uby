import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeaFormComponent } from './idea-form.component';

const routes: Routes = [{ path: '', component: IdeaFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeaFormRoutingModule {}
