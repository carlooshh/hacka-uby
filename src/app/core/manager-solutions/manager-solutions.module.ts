import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ManagerSolutionsRoutingModule } from './manager-solutions-routing.module';
import { ManagerSolutionsComponent } from './manager-solutions.component';
import { RoomCardComponent } from 'src/app/components/room-card/room-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from '../../components/menu-content/menu-content.module';

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
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatPaginatorModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSliderModule,
    MatStepperModule,
    MenuModule
  ],
  exports: [],
})
export class  ManagerSolutionsModule {}
