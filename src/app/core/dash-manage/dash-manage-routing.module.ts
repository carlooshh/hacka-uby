import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashManageComponent } from './dash-manage.component';

const routes: Routes = [{ path: '', component: DashManageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashManageRoutingModule {}
