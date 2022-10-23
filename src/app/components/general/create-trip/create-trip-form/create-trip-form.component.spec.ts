import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripFormComponent } from './create-trip-form.component';

describe('CreateTripFormComponent', () => {
  let component: CreateTripFormComponent;
  let fixture: ComponentFixture<CreateTripFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
