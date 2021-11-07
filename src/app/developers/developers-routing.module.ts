import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperDetailsComponent } from './components/developer-details/developer-details.component';
import { DeveloperEditComponent } from './components/developer-edit/developer-edit.component';
import { DevelopersListComponent } from './components/developers-list/developers-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: DevelopersListComponent
  },
  {
    path: 'details/:id',
    component: DeveloperDetailsComponent
  },
  {
    path: 'create',
    component: DeveloperEditComponent
  },
  {
    path: 'edit/:id',
    component: DeveloperEditComponent
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
export class DevelopersRoutingModule {
}
