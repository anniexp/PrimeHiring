import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Hiring } from '../../models/hiringProcess.model';
import { HiringsService } from '../../services/hirings.service';

@Component({
  selector: 'lq-hiring-delete-dialog',
  templateUrl: './hiring-delete-dialog.component.html',
  styleUrls: ['./hiring-delete-dialog.component.scss']
})
export class HiringDeleteDialogComponent implements OnInit {

  hiringDeleted = new EventEmitter<void>();

  hiring: Hiring;

  constructor(private hiringsService: HiringsService,
              private toastrService: ToastrService,
              private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  deleteHiring(): void {
    this.hiringsService.delete$(this.hiring.id).pipe(
      take(1)
    ).subscribe(() => {
      this.toastrService.success('Hiring was successfully deleted.', 'Success');
      this.hideDialog();
      this.hiringDeleted.emit();
    });
  }

  hideDialog(): void {
    this.bsModalRef.hide();
  }

}
