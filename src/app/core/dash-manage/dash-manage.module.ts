import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashManageRoutingModule } from './dash-manage-routing.module';
import { DashManageComponent } from './dash-manage.component';

@NgModule({
  declarations: [
    DashManageComponent,
  ],
  imports: [
    CommonModule,
    DashManageRoutingModule,
  ],
  exports: [],
})
export class DashManageModule {}
