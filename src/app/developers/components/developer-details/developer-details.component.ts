import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Developer } from '../../models/developer.model';
import { DevelopersService } from '../../services/developer.service';

@Component({
  selector: 'lq-developer-details',
  templateUrl: './developer-details.component.html',
  styleUrls: ['./developer-details.component.scss']
})
export class DeveloperDetailsComponent implements OnInit {

  id: number;
  developer: Developer;

  constructor(private developersService: DevelopersService,
              private toastrService: ToastrService,
              private router: Router,
              private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.developersService.getById$(this.id).pipe(
      take(1)
    ).subscribe((developer ) => {
      this.developer = developer;
    }, (response: HttpErrorResponse) => {
      this.toastrService.error(response.message, 'Error');
      this.router.navigate(['developers']);
    });
  }
  

}
