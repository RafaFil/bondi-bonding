import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces';
import { SignupFormsComponent } from '../signup-forms/signup-forms.component';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.sass']
})
export class SignupPageComponent implements OnInit, AfterViewInit {

  @ViewChild('signUpForm') formData!: SignupFormsComponent;

  acceptedToS = false;
  everythingIsOk = false;

  personalInformationGroup!: FormGroup;

  identityValidationGroup = this.fb.group({
    secondCtrl: '',
  });

  constructor(private fb : FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.personalInformationGroup = this.formData.signUpForm;
  }

  pullFormData(){
    const user = this.formData.signUpForm.value as User;
  }


  toggleAcceptToS(){
    this.acceptedToS = !this.acceptedToS;
  }

  handleSignUp() {
    // TODO: Handle signup
    this.router.navigate([`/home`]);
  }

}
