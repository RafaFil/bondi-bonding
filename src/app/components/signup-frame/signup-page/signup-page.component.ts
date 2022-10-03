import { Component, OnInit, ViewChild } from '@angular/core';
import { SignupFormsComponent } from '../signup-forms/signup-forms.component';
import { TosComponent } from '../tos/tos.component';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.sass']
})
export class SignupPageComponent implements OnInit {

  @ViewChild('signUpForm') formData!: SignupFormsComponent;
  @ViewChild('#ToS_form') tos ! : TosComponent;

  everythingIsOk = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    this.everythingIsOk = this.tos.accepted;
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
    alert(
      "User created"
    )

  }

}
