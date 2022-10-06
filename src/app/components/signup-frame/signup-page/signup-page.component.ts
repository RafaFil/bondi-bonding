import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { SignupFormsComponent } from '../signup-forms/signup-forms.component';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.sass']
})
export class SignupPageComponent implements OnInit {

  @ViewChild('signUpForm') formData!: SignupFormsComponent;

  accepted = false;
  everythingIsOk = false;

  firstFormGroup = this.formData.signUpForm;

  secondFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });

  thirdFormGroup = this._formBuilder.group({
    secondCtrl: '',
  });


  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }
  
  step1validator() : boolean{
    return this.formData.signUpForm.valid;
  }

  pullFormData(){
    let data = this.formData.signUpForm.controls;
    let person = {
      name : data.name.value,
      username : data.birthdate.value,
      birthdate : data.birthdate.value,
      gender : data.gender.value,
      phone : data.phone.value,
      email : data.email.value,
    }
    let age = "";
    if (typeof person.birthdate === "string"){
      age = person.birthdate;
    }
    if (Number.parseInt(age) < 18) {
      alert("u r a minor")
    }
    alert(this.formData.signUpForm.valid)
  }


  acceptTerms(){
    if (this.accepted) {
      this.accepted = false;
    }
    else{
      this.accepted = true;
    }
  }


}
