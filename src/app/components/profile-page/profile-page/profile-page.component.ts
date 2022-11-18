import { Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { TripFiltersFormComponent } from '../../general/trip-filters-form/trip-filters-form.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {

  isEditMode: boolean = false;
  isOwnProfile: boolean = false;
  user!: User;

  @ViewChild("#UserFilters") filtersForm !: TripFiltersFormComponent;

  get showMenuAndFilters(): boolean {
    if (!this.isOwnProfile) {
      return false;
    } else {
      return !this.isEditMode;
    }
  }

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              private authService: AuthService) { }

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
        console.log(this.user.username);
        console.log(this.authService.runningUser!.username);
      });
    } else {
      this.profileService.getProfile(this.authService.runningUser!.username!)
      .subscribe(user => {
        this.user = user;
        this.isOwnProfile = this.user.username === this.authService.runningUser!.username;
        console.log(this.user.username);
        console.log(this.authService.runningUser!.username);

      });
    }
  }

  saveFilters(){
    const filters = this.filtersForm.filterForm.controls;
    this.profileService.updateProfileFilters(); //Parameter
  }

  closeEditMode(eventData: { edit : boolean }) {
    if (this.isOwnProfile) {
      this.isEditMode = eventData.edit;
    }
  }
}
