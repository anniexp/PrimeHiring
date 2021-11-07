import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringsListComponent } from './hirings-list.component';

describe('HiringsListComponent', () => {
  let component: HiringsListComponent;
  let fixture: ComponentFixture<HiringsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
