import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFiltersFormComponent } from './trip-filters-form.component';

describe('TripFiltersFormComponent', () => {
  let component: TripFiltersFormComponent;
  let fixture: ComponentFixture<TripFiltersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripFiltersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripFiltersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
