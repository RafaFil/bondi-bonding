import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingSheetComponent } from './sliding-sheet.component';

describe('SlidingSheetComponent', () => {
  let component: SlidingSheetComponent;
  let fixture: ComponentFixture<SlidingSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
