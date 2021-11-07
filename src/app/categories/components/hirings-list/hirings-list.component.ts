import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { Hiring } from '../../models/hiringProcess.model';
import {  HiringsService } from '../../services/hirings.service';
import { HiringDeleteDialogComponent } from '../hiring-delete-dialog/hiring-delete-dialog.component';
import { HiringEditDialogComponent } from '../hiring-edit-dialog/hiring-edit-dialog.component';

@Component({
  selector: 'lq-hirings-list',
  templateUrl: './hirings-list.component.html',
  styleUrls: ['./hirings-list.component.scss']
})
export class HiringsListComponent implements OnInit {

  hirings: Hiring[];

  constructor(private hiringsService: HiringsService,
              private bsModalService: BsModalService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  onCreateClick(): void {
    this.onEditClick();
  }

  onEditClick(id?: number): void {
    const ref = this.bsModalService.show(HiringEditDialogComponent, {
      initialState: {
        id: id
      }
    });

    ref.content.hiringSaved.pipe(
      take(1)
    ).subscribe(() => {
      this.getAll();
    });
  }

  onDeleteClick(hiring: Hiring): void {
    const ref = this.bsModalService.show(HiringDeleteDialogComponent, {
      initialState: {
        hiring: hiring
      }
    });

    ref.content.hiringDeleted.pipe(
      take(1)
    ).subscribe(() => {
      this.getAll();
    });
  }

  private getAll(): void {
    this.hiringsService.getAll$().pipe(
      take(1)
    ).subscribe((response) => {
      this.hirings = response;
    });
  }

}
