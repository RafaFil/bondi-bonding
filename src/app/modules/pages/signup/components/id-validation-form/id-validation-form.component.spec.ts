import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdValidationFormComponent } from './id-validation-form.component';

describe('IdValidationFormComponent', () => {
  let component: IdValidationFormComponent;
  let fixture: ComponentFixture<IdValidationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdValidationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdValidationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
