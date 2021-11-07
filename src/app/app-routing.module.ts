import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'developers',
    loadChildren: () => import('./developers/developers.module').then(m => m.DevelopersModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/hirings.module').then(m => m.HiringsModule)
  }, 
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
