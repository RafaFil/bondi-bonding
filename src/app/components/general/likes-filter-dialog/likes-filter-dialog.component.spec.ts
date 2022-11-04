import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesFilterDialogComponent } from './likes-filter-dialog.component';

describe('LikesFilterDialogComponent', () => {
  let component: LikesFilterDialogComponent;
  let fixture: ComponentFixture<LikesFilterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesFilterDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikesFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
