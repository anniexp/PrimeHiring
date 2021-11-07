import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Developer } from '../../models/developer.model';
import { DevelopersService } from '../../services/developer.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'lq-developer-edit',
  templateUrl: './developer-edit.component.html',
  styleUrls: ['./developer-edit.component.scss']
})
export class DeveloperEditComponent implements OnInit {

  id: number;
  developer: Developer;


  formGroup: FormGroup;

  constructor(private developersService: DevelopersService,
              private toastrService: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.id) {
      this.developersService.getById$(this.id).subscribe((response) => {
        this.developer = response;
        this.buildForm(response);
      });
    } else {
      this.buildForm();
    }

  /*  ngOnInit(): void {
      if (this.id) {
      this.developersService.getById$(this.id).pipe(
        take(1)
      ).subscribe((response ) => {
        this.developer = response;
        this.buildForm(response);

      }); }
      else {
        this.buildForm();
      }
 */
  
}

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();

      return;
    }

    const body: Developer = {
      ...this.developer,
      ...this.formGroup.value,
    
      
    };


    this.developersService.save$(body).pipe(
      take(1)
    ).subscribe(() => {
      this.toastrService.success('Developer was successfully saved.', 'Success');
      this.router.navigate(['developers']);
    });
  }

  private buildForm(developer?:  Developer): void {
    if (!developer) {
      developer = new Developer();
    }




    this.formGroup = this.fb.group({
      name:[ developer.name, Validators.required ] ,   
      email:[developer.email , Validators.required, Validators.email],
      phoneNumber: [ developer.phoneNumber, Validators.required,  Validators.minLength(6), Validators.maxLength(10), Validators.pattern('^[0-9]$')],
      location : developer.location,
        posterImgUrl:developer.posterImgUrl, 
        pricePerHour :[ developer.pricePerHour, Validators.min(0) ],
        technology: developer.technology,
        description: developer.description,
        yearsOfExperience : [developer.yearsOfExperience,Validators.required ] ,
        nativeLanguage:[ developer.nativeLanguage, Validators.required ] ,
        
        linkedInProfileLink:[developer.linkedInProfileLink]
        
      
    });
  }
  }


