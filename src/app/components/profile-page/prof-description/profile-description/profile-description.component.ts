import { ProfileService } from 'src/app/services/profile.service';
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

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  handleEditEnd($event: {
    isEdit: boolean,
    username?: string,
    phone?: string,
    email?: string,
    description?: string
  }) {
    if (this.isEdit) {
      this.profileService.updatePublicProfile($event);
    }

    this.closeEditMode.emit({edit : false});
  }

}
