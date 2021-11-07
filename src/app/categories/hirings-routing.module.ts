import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringsListComponent } from './components/hirings-list/hirings-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: HiringsListComponent
  },
  {
    path: '',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiringsRoutingModule {
}
