import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'task/add/new',
    loadChildren: () =>
      import('./components/new-task/new-task.module').then(
        (m) => m.NewTaskModule
      ),
  },
  {
    path: 'task/:id',
    loadChildren: () =>
      import('./components/view-task/view-task.module').then(
        (m) => m.ViewTaskPageModule
      ),
  },
  {
    path: 'task/:id/edit',
    loadChildren: () =>
      import('./components/new-task/new-task.module').then(
        (m) => m.NewTaskModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
