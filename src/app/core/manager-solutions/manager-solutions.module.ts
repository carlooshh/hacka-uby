import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManagerSolutionsRoutingModule } from './manager-solutions-routing.module';
import { ManagerSolutionsComponent } from './manager-solutions.component';
import { RoomCardComponent } from 'src/app/components/room-card/room-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    ManagerSolutionsComponent,
    RoomCardComponent
  ],
  imports: [
    CommonModule,
    ManagerSolutionsRoutingModule,
    MatPaginatorModule,
    HttpClientModule,
    MatCardModule,
    MatSidenavModule
  ],
  exports: [],
})
export class  ManagerSolutionsModule {}
