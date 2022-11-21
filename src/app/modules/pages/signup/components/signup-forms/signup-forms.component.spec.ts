import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormsComponent } from './signup-forms.component';

describe('SignupFormsComponent', () => {
  let component: SignupFormsComponent;
  let fixture: ComponentFixture<SignupFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
