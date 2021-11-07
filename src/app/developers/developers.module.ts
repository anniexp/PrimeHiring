import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { DeveloperDetailsComponent } from './components/developer-details/developer-details.component';
import { DeveloperEditComponent } from './components/developer-edit/developer-edit.component';
import { DevelopersListComponent } from './components/developers-list/developers-list.component';
import { DevelopersRoutingModule } from './developers-routing.module';
import { PhoneMaskDirectiveTsDirective } from '../phone-mask.directive.ts.directive';
//import { PhoneTypeFormComponent } from './contact-form/phones-form/phone-type-form/phone-type-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    ButtonsModule.forRoot(),
    ModalModule.forChild(),
    SharedModule,
    DevelopersRoutingModule
  ],
  declarations: [
    DevelopersListComponent,
    DeveloperDetailsComponent,
    DeveloperEditComponent
  ],
  exports: [
    DevelopersListComponent,
    
  ]
})
export class DevelopersModule {
}
