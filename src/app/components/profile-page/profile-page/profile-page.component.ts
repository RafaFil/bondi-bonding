import { Component, OnInit, ViewChild} from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';
import { TripFiltersFormComponent } from '../../general/trip-filters-form/trip-filters-form.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {

  @ViewChild("#UserFilters") filtersForm !: TripFiltersFormComponent;
  

  editionModeOn = false;

  user! : User;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getUser("a","a");
  }

  enterEditionMode(){
    this.editionModeOn = true;
  }

  getUser(username:string,auth:string) {
    this.user = this.userService.getUser("username","auth");
  }

  saveFilters(){
    const filters = this.filtersForm.filterForm.controls;
    this.userService.updateUserFilters(); //Parameter
  }

}
