import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTripButtonComponent } from './create-trip-button.component';

describe('CreateTripButtonComponent', () => {
  let component: CreateTripButtonComponent;
  let fixture: ComponentFixture<CreateTripButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTripButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTripButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
