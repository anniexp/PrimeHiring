import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Developer } from 'src/app/developers/models/developer.model';
import { DevelopersService } from 'src/app/developers/services/developer.service';
import { Hiring } from '../../models/hiringProcess.model';
import { HiringsService } from '../../services/hirings.service';

@Component({
  selector: 'lq-hiring-edit-dialog',
  templateUrl: './hiring-edit-dialog.component.html',
  styleUrls: ['./hiring-edit-dialog.component.scss']
})
export class HiringEditDialogComponent implements OnInit {

  hiringSaved = new EventEmitter<Hiring>();

  id: number;
  hiring: Hiring;
  developers: Developer[];
  developerId : Number[];
 

  formGroup: FormGroup;

  constructor(private hiringsService: HiringsService,
              private toastrService: ToastrService,
              private bsModalRef: BsModalRef,
              private fb: FormBuilder,
              private developersService: DevelopersService
              ) {
  }

  ngOnInit(): void {
    if (this.id) {
      this.hiringsService.getById$(this.id).pipe(
        take(1)
      ).subscribe((response) => {
        this.hiring = response;
        this.buildForm(response);
      });
    } else {
      this.buildForm();
    }

    this.developersService.getAll$().pipe(
      take(1)
    ).subscribe((response) => {
      this.developers = response;
    });
    //this.buildForm();
  }
  


  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();

      return;
    }

    const body: Hiring = {
      ...this.hiring,
      ...this.formGroup.value
    };

delete body.developersId;

    this.hiringsService.save$(body).pipe(
      take(1)
    ).subscribe((response) => {
      this.toastrService.success('Hiring was successfully saved.', 'Success');
      this.hideDialog();
      this.hiringSaved.emit(response);
    });
  }

  hideDialog(): void {
    this.bsModalRef.hide();
  }

  private buildForm(hiring?: Hiring): void {
    if (!hiring) {
      hiring = new Hiring();
    }

  /*  let endDate;
    if (hiring.endDate) {
      endDate = new Date(hiring.endDate);
    } else {
      endDate = new Date();
    }
    let startDate;
    if (hiring.startDate) {
      startDate = new Date(hiring.startDate);
    } else {
      startDate = new Date();
    }
    let developersId;
    if (hiring.developersId) {
      developersId = developersId ;
    } else {
      developersId = new Number[0];
    }
*/

    this.formGroup = this.fb.group({ 
      id : [hiring.id],
      startDate: [hiring.startDate, [Validators.required] ],
     endDate :[hiring.endDate,  [Validators.required]],
     developersId :[
       hiring.developersId,[RxwebValidators.unique]]



    });
  }

}

 