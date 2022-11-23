import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { User } from 'src/app/modules/core/interfaces';
import { SignupService } from 'src/app/modules/core/services/signup.service';
import { SignupErrDialogComponent } from '../../components/signup-err-dialog/signup-err-dialog.component';
import { SignupFormsComponent } from '../../components/signup-forms/signup-forms.component';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.sass']
})
export class SignupPageComponent implements OnInit, AfterViewInit {

  stepperOrientation: StepperOrientation = 'vertical';
  acceptedToS = false;
  everythingIsOk = false;
  personalInformationGroup!: FormGroup;
  identityValidationGroup = this.fb.group({
    secondCtrl: '',
  });

  @ViewChild('signUpForm')
  formData!: SignupFormsComponent;

  constructor(private fb : FormBuilder,
              private router: Router,
              private breakpointObserver: BreakpointObserver,
              private signupService : SignupService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.personalInformationGroup = this.formData.signUpForm;
      this.breakpointObserver.observe('(max-width: 700px)')
      .subscribe((breakpointState) => this.switchStepperOrientation(breakpointState));
  }

  switchStepperOrientation({ matches }: BreakpointState): void {
    this.stepperOrientation = matches ? 'vertical' : 'horizontal';
  }

  pullFormData(){
    const user = this.formData.signUpForm.value as User;
    return user;
  }

  toggleAcceptToS(){
    this.acceptedToS = !this.acceptedToS;
  }

  handleSignUp() {
    const user = this.pullFormData();
    
    this.signupService.createUser(user).subscribe(serviceResult => {
      if(!serviceResult.success){
        if (serviceResult.message?.includes('Duplicate username')) {
          this.dialog.open(SignupErrDialogComponent, {
            data: "Duplicate username"
          });
        }
        else {
          this.dialog.open(SignupErrDialogComponent,{
            data: "Internal server error, try again later"
          });
        }
      }
      else {
        this.router.navigate([`/home`]);
      }
    });
  }

}
