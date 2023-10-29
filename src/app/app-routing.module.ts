import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./core/manager-solutions/manager-solutions.module').then(
        (m) => m.ManagerSolutionsModule
      ),
  },
  {
    path: 'idea',
    loadChildren: () =>
      import('./core/idea-form/idea-form.module').then((m) => m.IdeaFormModule),
  },
  {
    path: 'dash',
    loadChildren: () =>
      import('./core/dash-manage/dash-manage.module').then((m) => m.DashManageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
