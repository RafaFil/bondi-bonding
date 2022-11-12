import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.sass']
})
export class ProfileDescriptionComponent implements OnInit {

  @Input() user!: User;
  @Input() isEdit : boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

  disableEdit() { 
    console.log(this.isEdit)
    this.isEdit = false 
  }

}
