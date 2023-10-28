import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerSolutionsComponent } from './manager-solutions.component';

const routes: Routes = [{ path: '', component: ManagerSolutionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class  ManagerSolutionsRoutingModule {}
