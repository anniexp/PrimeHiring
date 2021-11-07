import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { HiringsRoutingModule } from './hirings-routing.module';
import { HiringDeleteDialogComponent } from './components/hiring-delete-dialog/hiring-delete-dialog.component';
import { HiringEditDialogComponent } from './components/hiring-edit-dialog/hiring-edit-dialog.component';
import { HiringsListComponent } from './components/hirings-list/hirings-list.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forChild(),
    SharedModule,
    HiringsRoutingModule
  ],
  declarations: [
    HiringsListComponent,
    HiringEditDialogComponent,
    HiringDeleteDialogComponent
  ]
})
export class HiringsModule {
}
