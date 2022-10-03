import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationFromComponent } from './validation-from.component';

describe('ValidationFromComponent', () => {
  let component: ValidationFromComponent;
  let fixture: ComponentFixture<ValidationFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
