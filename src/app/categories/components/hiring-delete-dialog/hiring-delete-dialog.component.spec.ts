import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringDeleteDialogComponent } from './hiring-delete-dialog.component';

describe('HiringDeleteDialogComponent', () => {
  let component: HiringDeleteDialogComponent;
  let fixture: ComponentFixture<HiringDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
