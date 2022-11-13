import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.sass']
})
export class ProfileDescriptionComponent implements OnInit {

  @Input() user!: User;
  @Input() isEdit : boolean = true;

  @Output() closeEditMode = new EventEmitter<{ edit: boolean }>();

  constructor() { }

  ngOnInit(): void {
  }

  onChanges() { 
    this.closeEditMode.emit({edit : false});
  }

}
