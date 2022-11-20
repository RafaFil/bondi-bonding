import { ProfileService } from 'src/app/services/profile.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.sass']
})
export class ProfileDescriptionComponent implements OnInit {

  @Input() user!: User;
  @Input() isEdit: boolean = true;
  @Input() profilePicture?: File;

  @Output() closeEditMode = new EventEmitter<{ edit: boolean }>();

  constructor(private profileService: ProfileService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  handleEditEnd($event: {
    isEdit: boolean,
    username?: string,
    phone?: string,
    email?: string,
    description?: string
  }) {
    if (!this.isEdit) return;

    if (!this.profilePicture) {
      this.handleProfileUpdate($event);
      return;
    }

    this.profileService.uploadProfilePicture(this.profilePicture)
    .subscribe(result => {
      if (result.success) {
        this.handleProfileUpdate({ ...$event, iconKey: result.data });
        return;
      }

      this.handleProfileUpdate($event);
    });
  }

  handleProfileUpdate($event: {
    isEdit: boolean,
    username?: string,
    phone?: string,
    email?: string,
    description?: string,
    iconKey?: string
  }) {
    this.profileService.updatePublicProfile($event)
    .subscribe(result => {
      let msg;

      if (result.success) {
        this.closeEditMode.emit({edit : false});
        msg = 'Your profile has been updated successfully.';
      } else {
        msg = 'There was an error while updating your public profile.';
      }

      this.snackBar.open(msg, '', { duration: 3000 });
    });
  }

}
