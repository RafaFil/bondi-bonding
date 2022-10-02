import { Component, OnInit, Attribute} from '@angular/core';
import { FormBuilder,FormControl,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-forms',
  templateUrl: './signup-forms.component.html',
  styleUrls: ['./signup-forms.component.sass']
})
export class SignupFormsComponent implements OnInit {

  hide = true;

  signUpForm = this.formBuilder.group(
    {
      name : ['',[Validators.required,Validators.minLength(3)]],
      username : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      birthdate : ['',[Validators.required]], // ??? just put the age (?) dunno
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(16)]],
      gender : ['',[Validators.required]], // is it necesary?
      phone : ['',[Validators.required]], // how to validate it :)
      email : ['',[Validators.required,Validators.email]],
    }
  )
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  errorMessage(){
    if(
      this.signUpForm.controls.name.hasError('required') || 
      this.signUpForm.controls.username.hasError('required') ||
      this.signUpForm.controls.birthdate.hasError('required') ||
      this.signUpForm.controls.password.hasError('required') ||
      this.signUpForm.controls.gender.hasError('required') ||
      this.signUpForm.controls.phone.hasError('required') ||
      this.signUpForm.controls.email.hasError('required')
    ){
      
      return "Required field" ;
    }
      return "";
  }
  
}
