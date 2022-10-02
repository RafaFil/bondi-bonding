import { Component, OnInit, ViewChild } from '@angular/core';
import { SignupFormsComponent } from '../signup-forms/signup-forms.component';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.sass']
})
export class SignupPageComponent implements OnInit {

  @ViewChild('signUpForm') formData!: SignupFormsComponent;



  constructor() { }

  ngOnInit(): void {
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
    alert(
      "User created"
    )

  }

}
