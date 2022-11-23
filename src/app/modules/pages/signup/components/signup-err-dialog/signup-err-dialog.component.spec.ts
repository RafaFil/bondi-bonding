import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupErrDialogComponent } from './signup-err-dialog.component';

describe('SignupErrDialogComponent', () => {
  let component: SignupErrDialogComponent;
  let fixture: ComponentFixture<SignupErrDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupErrDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupErrDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
