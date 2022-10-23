import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripFiltersModalComponent } from './create-trip-filters-modal.component';

describe('CreateTripFiltersModalComponent', () => {
  let component: CreateTripFiltersModalComponent;
  let fixture: ComponentFixture<CreateTripFiltersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripFiltersModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTripFiltersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
