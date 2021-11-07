import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Developer } from '../../models/developer.model';
import { DevelopersService } from '../../services/developer.service';
/*
@Component({
  selector: 'lq-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.scss']
})
export class DevelopersListComponent implements OnInit {

  developers: Developer[];

  selectedDeveloper: Developer;
  modalRef: BsModalRef;

  listType = 'table';

  constructor(private developersService: DevelopersService,
              private toastrService: ToastrService,
              private bsModalService: BsModalService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  openDeleteDialog(template: TemplateRef<any>, developer: D): void {
    this.selectedDeveloper = developer;
    this.modalRef = this.bsModalService.show(template);
  }

  deleteGame(): void {
    this.developersService.delete$(this.selectedDeveloper.id).pipe(
      take(1)
    ).subscribe(() => {
      this.getAll();
      this.toastrService.success('Developer was successfully deleted.', 'Success');
      this.modalRef.hide();
    }, (response: HttpErrorResponse) => {
      this.toastrService.error(response.message, 'Error', {
        disableTimeOut: true,
        closeButton: true
      });
    });
  }

  private getAll(): void {
    this.developersService.getAll$().pipe(
      take(1)
    ).subscribe((response) => {
      this.developers = response;
    });
  }
}
*/