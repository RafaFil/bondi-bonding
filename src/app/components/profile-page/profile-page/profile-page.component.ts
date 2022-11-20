import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TripFilters } from 'src/app/interfaces';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {

  profilePicture?: File;
  isEditMode: boolean = false;
  isOwnProfile: boolean = false;
  user!: User;

  get showMenuAndFilters(): boolean {
    if (!this.isOwnProfile) {
      return false;
    } else {
      return !this.isEditMode;
    }
  }

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUser();
  }

  enterEditionMode() {
    if (this.isOwnProfile) {
      this.isEditMode = true;
    }
  }

  getUser() {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.profileService.getProfile(username)
      .subscribe(user => {
        this.user = user
        this.isOwnProfile = this.user.username === this.authService.runningUser!.username;
      });
    } else {
      this.profileService.getProfile(this.authService.runningUser!.username!)
      .subscribe(user => {
        this.user = user;
        this.isOwnProfile = this.user.username === this.authService.runningUser!.username;
      });
    }
  }

  saveFilters($event: TripFilters) {
    this.profileService.updateProfileFilters($event)
    .subscribe(result => {
      let msg;

      if (result.success) {
        msg = 'Your trip filters have been updated successfully.';
      } else {
        msg = 'There was an error while updating your trip filters, please try again later.';
      }

      this.snackBar.open(msg, '', {
        duration: 3000
      });
    });
  }

  closeEditMode(eventData: { edit : boolean }) {
    if (this.isOwnProfile) {
      this.isEditMode = eventData.edit;
    }
  }

  handleProfilePictureChange($event: Event) {
    const { files } = $event.target as HTMLInputElement;
    if (!files) {
      this.profilePicture = undefined;
      return;
    }

    this.profilePicture = files[0];
    this.profileService.uploadProfilePicture(this.profilePicture!);
  }
}
