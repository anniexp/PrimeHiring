import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringEditDialogComponent } from './hiring-edit-dialog.component';

describe('HiringEditDialogComponent', () => {
  let component: HiringEditDialogComponent;
  let fixture: ComponentFixture<HiringEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
