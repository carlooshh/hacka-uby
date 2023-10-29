import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManagerSolutionsRoutingModule } from './manager-solutions-routing.module';
import { ManagerSolutionsComponent } from './manager-solutions.component';
import { RoomCardComponent } from 'src/app/components/room-card/room-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ManagerSolutionsComponent,
    RoomCardComponent
  ],
  imports: [
    CommonModule,
    ManagerSolutionsRoutingModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  exports: [],
})
export class  ManagerSolutionsModule {}
